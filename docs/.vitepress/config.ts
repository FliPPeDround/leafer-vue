import { defineConfig } from 'vitepress'
import { mdPlugin } from './plugin'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'leafer-vue',
  description: 'leafer-vue document',
  themeConfig: {
    nav: [
      {
        text: '文档',
        items: [
          { text: '介绍', link: '/guide/start/introduction' },
          { text: '安装', link: '/guide/start/usage' },
          { text: '组件', link: '/guide/components/app/leaferApp' },
          { text: '事件', link: '/guide/events/index' },
        ],
      },
      {
        text: '插件',
        link: '/plugin/index',
      },
      {
        text: '演练场',
        link: 'https://leafer-vue-playground.netlify.app/',
      },
      {
        text: '生态',
        items: [
          { text: 'vue2', link: '/intro/vue2' },
          { text: 'uni-app', link: '/intro/uni' },
          { text: 'nuxt', link: '/intro/nuxt' },
        ],
      },
    ],

    sidebar: {
      '/guide/': [
        {
          text: '开始',
          items: [
            { text: '介绍', link: '/guide/start/introduction' },
            { text: '安装', link: '/guide/start/usage' },
          ],
        },
        {
          text: '应用组件',
          items: [
            {
              text: 'LeaferApp',
              link: '/guide/components/app/leaferApp',
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
        {
          text: '自定义元素',
          items: [
            {
              text: 'Custom',
              link: '/guide/components/custom/index',
            },
          ],
        },
        {
          text: '事件',
          items: [
            {
              text: '事件处理',
              link: '/guide/events/index',
            },
            {
              text: '交互事件',
              collapsed: true,
              items: [
                { text: 'PointerEvent', link: '/guide/events/action/Pointer/pointer' },
                { text: 'DragEvent', link: '/guide/events/action/Drag/drag' },
                { text: 'DropEvent', link: '/guide/events/action/Drop/drop' },
                { text: 'SwipeEvent', link: '/guide/events/action/Swipe/swipe' },
                { text: 'MoveEvent', link: '/guide/events/action/Move/move' },
                { text: 'ZoomEvent', link: '/guide/events/action/Zoom/zoom' },
                { text: 'RotateEvent', link: '/guide/events/action/Rotate/rotate' },
                { text: 'KeyEvent', link: '/guide/events/action/Key/key' },
              ],
            },
            {
              text: '元素事件',
              collapsed: true,
              items: [
                { text: 'ImageEvent', link: '/guide/events/element/Image/image' },
                { text: 'ChildEvent', link: '/guide/events/element/Child/child' },
                { text: 'PropertyEvent', link: '/guide/events/element/Property/property' },
              ],
            },
            {
              text: '平台事件',
              collapsed: true,
              items: [
                { text: 'LeaferEvent', link: '/guide/events/leafer/Leafer/leafer' },
                { text: 'ResizeEvent', link: '/guide/events/leafer/Resize/resize' },
                { text: 'RenderEvent', link: '/guide/events/leafer/Render/render' },
                { text: 'LayoutEvent', link: '/guide/events/leafer/Layout/layout' },
                { text: 'WatchEvent', link: '/guide/events/leafer/Watch/watch' },
              ],
            },
          ],
        },
        {
          text: '更多',
          items: [
            {
              text: '插件',
              link: '/plugin/index',
            },
            {
              text: 'vue2',
              link: '/intro/vue2',
            },
            {
              text: 'Nuxt',
              link: 'intro/nuxt',
            },
            {
              text: 'uni-app',
              link: '/intro/uni',
            },
          ],
        },
      ],
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/FliPPeDround/leafer-vue' },
    ],
  },
  markdown: {
    config: md => md.use(mdPlugin),
  },
})
