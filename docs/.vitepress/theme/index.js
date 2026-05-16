import DefaultTheme from 'vitepress/theme'
import './style.css'

function initStaggerAnimation() {
  const selectors = ['.VPFeature', '.VPHomeHero']
  selectors.forEach(selector => {
    const elements = document.querySelectorAll(selector)
    elements.forEach((el, index) => {
      el.style.opacity = '0'
      el.style.transform = 'translateY(20px)'
      el.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`
      requestAnimationFrame(() => {
        el.style.opacity = '1'
        el.style.transform = 'translateY(0)'
      })
    })
  })
}

function initScrollAnimation() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible')
        observer.unobserve(entry.target)
      }
    })
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  })

  const animatedElements = document.querySelectorAll('.VPFeature, .VPFeatures, .VPHomeContent')
  animatedElements.forEach(el => {
    el.classList.add('scroll-animate')
    observer.observe(el)
  })
}

function initNavbarScroll() {
  const nav = document.querySelector('.VPNav')
  if (!nav) return

  const handleScroll = () => {
    if (window.scrollY > 50) {
      nav.classList.add('is-scrolled')
    } else {
      nav.classList.remove('is-scrolled')
    }
  }

  window.addEventListener('scroll', handleScroll, { passive: true })
  handleScroll()
}

function forceDarkMode() {
  const html = document.documentElement
  html.classList.add('dark')
  html.classList.remove('light')
  html.style.colorScheme = 'dark'
  localStorage.setItem('vitepress-theme-appearance', 'dark')
}

export default {
  extends: DefaultTheme,
  enhanceApp({ app, router, siteData }) {
    if (typeof window !== 'undefined') {
      forceDarkMode()

      router.onAfterRouteChanged = () => {
        setTimeout(() => {
          forceDarkMode()
          initStaggerAnimation()
          initScrollAnimation()
          initNavbarScroll()
        }, 0)
      }

      if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', () => {
          forceDarkMode()
          initStaggerAnimation()
          initScrollAnimation()
          initNavbarScroll()
        })
      } else {
        forceDarkMode()
        initStaggerAnimation()
        initScrollAnimation()
        initNavbarScroll()
      }
    }
  }
}
