import type { MarkdownRenderer } from 'vitepress'
import { groupIconMdPlugin } from 'vitepress-plugin-group-icons'
import tooltip from './tooltip'

export function mdPlugin(md: MarkdownRenderer) {
  md.use(tooltip)
  md.use(groupIconMdPlugin)
}
