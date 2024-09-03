import type { MarkdownRenderer } from 'vitepress'
import tooltip from './tooltip'

export function mdPlugin(md: MarkdownRenderer) {
  md.use(tooltip)
}
