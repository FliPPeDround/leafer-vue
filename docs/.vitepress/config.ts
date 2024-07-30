import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'leafer-vue',
  description: 'leafer-vue document',
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
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
            text: 'LeaferApp',
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
      {
        text: '图形组件',
        items: [
          {
            text: 'Rect',
            link: '/guide/components/shape/rect',
          },
          {
            text: 'Ellipse',
            link: '/guide/components/shape/ellipse',
          },
          {
            text: 'Polygon',
            link: '/guide/components/shape/polygon',
          },
          {
            text: 'Star',
            link: '/guide/components/shape/star',
          },
          {
            text: 'Line',
            link: '/guide/components/shape/line',
          },
        ],
      },
      {
        text: '路径组件',
        items: [
          {
            text: 'Path',
            link: '/guide/components/path/path',
          },
          {
            text: 'Pen',
            link: '/guide/components/path/pen',
          },
        ],
      },
      {
        text: '图像组件',
        items: [
          {
            text: 'Image',
            link: '/guide/components/image/image',
          },
          {
            text: 'Canvas',
            link: '/guide/components/image/canvas',
          },
        ],
      },
      {
        text: '文字组件',
        items: [
          {
            text: 'Text',
            link: '/guide/components/text/text',
          },
        ],
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/FliPPeDround/leafer-vue' },
    ],
  },
})
