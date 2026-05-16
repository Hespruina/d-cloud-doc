import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'D-Cloud Minecraft Server',
  description: 'Minecraft生存服务器文档站',
  
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['meta', { name: 'theme-color', content: '#3b82f6' }],
  ],

  themeConfig: {
    logo: '/logo.svg',
    
    nav: [
      { text: '首页', link: '/' },
      { text: '新手指南', link: '/guide/getting-started' },
      { text: '服务器规则', link: '/rules/main-rules' },
      { text: '加入服务器', link: '/join/how-to-join' },
    ],

    sidebar: {
      '/guide/': [
        {
          text: '新手指南',
          items: [
            { text: '快速开始', link: '/guide/getting-started' },
            { text: '服务器特色', link: '/guide/features' },
            { text: '基础命令', link: '/guide/commands' },
            { text: '经济系统', link: '/guide/economy' },
          ],
        },
      ],
      '/rules/': [
        {
          text: '服务器规则',
          items: [
            { text: '核心规则', link: '/rules/main-rules' },
            { text: '建筑规范', link: '/rules/building-rules' },
            { text: 'PVP规则', link: '/rules/pvp-rules' },
          ],
        },
      ],
      '/join/': [
        {
          text: '加入服务器',
          items: [
            { text: '如何加入', link: '/join/how-to-join' },
            { text: '常见问题', link: '/join/faq' },
          ],
        },
      ],
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com' },
      { icon: 'discord', link: 'https://discord.gg' },
    ],

    footer: {
      message: '基于 VitePress 构建',
      copyright: 'Copyright © 2024 D-Cloud Minecraft Server',
    },

    editLink: {
      pattern: 'https://github.com/your-repo/edit/main/docs/:path',
      text: '在 GitHub 上编辑此页',
    },

    lastUpdated: {
      text: '最后更新于',
    },

    search: {
      provider: 'local',
    },
  },

  markdown: {
    lineNumbers: true,
  },
})
