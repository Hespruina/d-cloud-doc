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

function getStoredTheme() {
  try {
    return localStorage.getItem('vitepress-theme-appearance')
  } catch {
    return null
  }
}

function setStoredTheme(theme) {
  try {
    localStorage.setItem('vitepress-theme-appearance', theme)
  } catch {
    // ignore
  }
}

function applyTheme(theme) {
  const html = document.documentElement
  if (theme === 'light') {
    html.classList.add('light')
    html.classList.remove('dark')
    html.style.colorScheme = 'light'
  } else {
    html.classList.add('dark')
    html.classList.remove('light')
    html.style.colorScheme = 'dark'
  }
}

function toggleTheme() {
  const html = document.documentElement
  const isLight = html.classList.contains('light')
  const newTheme = isLight ? 'dark' : 'light'
  applyTheme(newTheme)
  setStoredTheme(newTheme)
  updateToggleButton(newTheme)
}

function updateToggleButton(theme) {
  const btn = document.querySelector('.custom-theme-toggle')
  if (!btn) return
  btn.innerHTML = theme === 'light'
    ? `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>`
    : `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>`
}

function initTheme() {
  const stored = getStoredTheme()
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
  const theme = stored || (prefersDark ? 'dark' : 'light')
  applyTheme(theme)
  updateToggleButton(theme)
}

function injectThemeToggle() {
  const insertToggle = () => {
    const target = document.querySelector('.VPNavBarExtra') || document.querySelector('.VPNavBarSearch')
    if (!target || document.querySelector('.custom-theme-toggle')) return

    const btn = document.createElement('button')
    btn.className = 'custom-theme-toggle'
    btn.setAttribute('aria-label', '切换主题')
    btn.addEventListener('click', toggleTheme)

    const isLight = document.documentElement.classList.contains('light')
    btn.innerHTML = isLight
      ? `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>`
      : `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>`

    target.parentNode.insertBefore(btn, target.nextSibling)
  }

  insertToggle()
  setTimeout(insertToggle, 500)
  setTimeout(insertToggle, 1500)
}

export default {
  extends: DefaultTheme,
  enhanceApp({ app, router, siteData }) {
    if (typeof window !== 'undefined') {
      initTheme()
      injectThemeToggle()

      router.onAfterRouteChanged = () => {
        setTimeout(() => {
          initTheme()
          injectThemeToggle()
          initStaggerAnimation()
          initScrollAnimation()
          initNavbarScroll()
        }, 0)
      }

      if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', () => {
          initTheme()
          injectThemeToggle()
          initStaggerAnimation()
          initScrollAnimation()
          initNavbarScroll()
        })
      } else {
        initTheme()
        injectThemeToggle()
        initStaggerAnimation()
        initScrollAnimation()
        initNavbarScroll()
      }
    }
  }
}
