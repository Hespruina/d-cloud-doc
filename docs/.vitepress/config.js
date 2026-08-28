import { defineConfig } from 'vitepress'

// ============================================================
// SEO 核心配置
// ============================================================
// 站点生产域名：用于 canonical、Open Graph、sitemap 的绝对地址。
// 若以后更换域名，只需修改这一处。
const SITE_URL = 'https://dcld.zhrhello.top'

// 默认社交分享图。建议后续替换为 1200×630 的专属横幅（/og.png）。
// 当前复用站点 Logo，保证标签有效。
const OG_IMAGE = '/logo.png'

// 根据页面源路径计算其生产环境绝对 URL（配合 cleanUrls 使用）
function pageUrl(relativePath) {
  let path = relativePath.replace(/\.md$/, '')
  if (path === 'index') path = ''
  else if (path.endsWith('/index')) path = path.slice(0, -'/index'.length)
  return SITE_URL + (path ? '/' + path : '/')
}

export default defineConfig({
  lang: 'zh-CN',
  title: 'D-Cloud Minecraft 生存服务器',
  titleTemplate: ':title | D-Cloud 官方文档',
  description: 'D-Cloud 纯净生存 Minecraft 服务器官方文档：新手入门、服务器地址 dc.zhrhello.top、基础命令与经济系统、领地保护、签到与每日收购教程，以及服务器规则。',

  head: [
    ['link', { rel: 'icon', href: '/logo.png', type: 'image/png' }],
    // Microsoft Clarity 用户行为分析跟踪
    ['script', {}, `(function(c,l,a,r,i,t,y){c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);})(window, document, "clarity", "script", "y9g51l10wc");`],
    ['meta', { name: 'theme-color', content: '#0a0e1a' }],
    // 基础 SEO 元信息
    ['meta', { name: 'keywords', content: 'Minecraft,我的世界,生存服务器,纯净生存,D-Cloud,服务器教程,领地保护,经济系统,每日签到,命令大全' }],
    ['meta', { name: 'author', content: 'D-Cloud Minecraft Server' }],
    ['meta', { name: 'robots', content: 'index, follow, max-image-preview:large' }],
    // Open Graph（站点级默认值，transformHead 会按页覆盖标题/描述/URL）
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:site_name', content: 'D-Cloud Minecraft Server' }],
    ['meta', { property: 'og:locale', content: 'zh_CN' }],
    ['meta', { property: 'og:image', content: SITE_URL + OG_IMAGE }],
    ['meta', { property: 'og:image:width', content: '512' }],
    ['meta', { property: 'og:image:height', content: '512' }],
    // Twitter Card
    ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
    // 字体预连接
    ['link', { rel: 'preconnect', href: 'https://fonts.googleapis.com' }],
    ['link', { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' }],
    ['link', { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&family=Noto+Sans+SC:wght@400;500;600;700&display=swap' }],
  ],

  // 每页注入：canonical、og:url/title/description、twitter 覆盖、JSON-LD 结构化数据
  transformHead: ({ pageData, head }) => {
    const url = pageUrl(pageData.relativePath)
    const title = pageData.title || 'D-Cloud Minecraft 生存服务器'
    const desc = pageData.description || 'D-Cloud 纯净生存 Minecraft 服务器官方文档'
    const image = SITE_URL + OG_IMAGE

    // 规范链接（避免重复内容）
    head.push(['link', { rel: 'canonical', href: url }])

    // Open Graph 按页覆盖
    head.push(['meta', { property: 'og:title', content: title }])
    head.push(['meta', { property: 'og:description', content: desc }])
    head.push(['meta', { property: 'og:url', content: url }])
    head.push(['meta', { property: 'og:image', content: image }])

    // Twitter 按页覆盖
    head.push(['meta', { name: 'twitter:title', content: title }])
    head.push(['meta', { name: 'twitter:description', content: desc }])
    head.push(['meta', { name: 'twitter:image', content: image }])

    // 结构化数据：Organization + WebSite
    const jsonLd = {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'Organization',
          '@id': SITE_URL + '/#organization',
          name: 'D-Cloud Minecraft Server',
          url: SITE_URL,
          logo: SITE_URL + '/logo.png',
          email: 'dcld@zhrhello.top',
          sameAs: [
            'https://github.com/Hespruina/d-cloud-doc',
          ],
        },
        {
          '@type': 'WebSite',
          '@id': SITE_URL + '/#website',
          url: SITE_URL,
          name: 'D-Cloud Minecraft 生存服务器官方文档',
          description: desc,
          inLanguage: 'zh-CN',
          publisher: { '@id': SITE_URL + '/#organization' },
        },
      ],
    }
    head.push(['script', { type: 'application/ld+json' }, JSON.stringify(jsonLd)])
  },

  cleanUrls: true,

  themeConfig: {
    logo: '/logo.png',

    nav: [
      { text: '首页', link: '/' },
      { text: '新手指南', link: '/guide/getting-started' },
      { text: '服务器教程', link: '/server/basic' },
      { text: '服务器规则', link: '/rules/main-rules' },
    ],

    sidebar: {
      '/guide/': [
        {
          text: '新手指南',
          items: [
            { text: '快速开始', link: '/guide/getting-started' },
            { text: '基础命令', link: '/guide/commands' },
            { text: '经济系统', link: '/guide/economy' },
            { text: '服务器特色', link: '/guide/features' },
            { text: '术语表', link: '/guide/glossary' },
            { text: '样式示例', link: '/guide/style-demo' },
          ],
        },
      ],
      '/server/': [
        {
          text: '服务器教程',
          items: [
            { text: '基本信息', link: '/server/basic' },
            { text: '签到系统', link: '/server/signin' },
            { text: '每日收购', link: '/server/daily-buy' },
            { text: '回收站系统', link: '/server/recycle-bin' },
            { text: '领地保护', link: '/server/res' },
            { text: '动作插件', link: '/server/gsit' },
          ],
        },
      ],
      '/rules/': [
        {
          text: '服务器规则',
          items: [
            { text: '核心规则', link: '/rules/main-rules' }
          ],
        },
      ],
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/Hespruina/d-cloud-doc' },
      { icon: {
          svg: '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 0 0-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .24z"/></svg>'
        },
        link: 'https://qm.qq.com/cgi-bin/qm/qr?k=TgsnceghZrh1XmTloJYUzFt1Ta2MkIpW&jump_from=webapi&authKey=aHF6XkBWFv7e0dUFTDQy4HSq5r7X7WC3EuQQIjCRRpytQbN2Kclozz80ydpxQZ23'
      },
    ],

    footer: {
      message: '基于 VitePress 构建',
      copyright: 'Copyright © 2024 D-Cloud Minecraft Server',
    },

    editLink: {
      pattern: 'https://github.com/Hespruina/d-cloud-doc/edit/main/docs/:path',
      text: '在 GitHub 上编辑此页',
    },

    lastUpdated: {
      text: '最后更新于',
    },

    search: {
      provider: 'local',
    },

    appearance: true,
  },

  markdown: {
    lineNumbers: true,
  },
})
