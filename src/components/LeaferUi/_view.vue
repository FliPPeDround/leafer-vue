<script setup lang="ts">
import { nextTick } from 'vue'
import { Leafer } from 'leafer-ui'
import type { ViewProps } from './props'

const props = defineProps<ViewProps>()
await nextTick()

// 遍历props将有值的属性赋值给config
const config = {}
for (const key in props) {
  if (Boolean(props[key]) !== false)
    config[key] = props[key]
}

const container = new Leafer({
  ...config,
  view: '__leafer-ui_container',
})
// eslint-disable-next-line vue/no-expose-after-await
defineExpose({ container, type: 'Leafer' })
</script>

<template>
  <slot />
</template>
