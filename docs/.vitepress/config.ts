import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'leafer-vue',
  description: 'leafer-vue document',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' },
    ],

    sidebar: [
      {
        text: '开始',
        items: [
          { text: '快速安装', link: '/guide/start/install' },
        ],
      },
      {
        text: '应用组件',
        items: [
          {
            text: 'App',
            link: '/guide/components/app/app',
          },
          {
            text: 'Leafer',
            link: '/guide/components/app/leafer',
          },
        ],
      },
      {
        text: '容器组件',
        items: [
          {
            text: 'Frame',
            link: '/guide/components/container/frame',
          },
          {
            text: 'Box',
            link: '/guide/components/container/box',
          },
          {
            text: 'Group',
            link: '/guide/components/container/group',
          },
        ],
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' },
    ],
  },
})
