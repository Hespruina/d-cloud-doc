import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'D-Cloud Minecraft Server',
  description: 'Minecraft生存服务器文档站',
  
  head: [
    ['link', { rel: 'icon', href: '/logo.png', type: 'image/png' }],
    ['meta', { name: 'theme-color', content: '#0a0e1a' }],
    ['link', { rel: 'preconnect', href: 'https://fonts.googleapis.com' }],
    ['link', { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' }],
    ['link', { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&family=Noto+Sans+SC:wght@400;500;600;700&display=swap' }],
  ],

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
            { text: '术语表', link: '/guide/glossary' },
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
