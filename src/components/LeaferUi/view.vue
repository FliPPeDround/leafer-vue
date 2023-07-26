<script setup lang="ts">
import { nextTick, provide } from 'vue'
import { Leafer, Rect } from 'leafer-ui'
import type { ViewProps } from './props'

const props = defineProps<ViewProps>()
await nextTick()

console.log(props)

// 遍历props将有值的属性赋值给config
const config = {}
for (const key in props) {
  if (Boolean(props[key]) !== false)
    config[key] = props[key]
}

console.log(config)

const leafer = new Leafer({
  ...config,
  view: '__leafer-ui_container',
})

provide('leafer', leafer)

const rect = new Rect({
  width: 300,
  height: 300,
  fill: '#32cd79',
  draggable: true,
})

leafer.add(rect)
</script>

<template>
  test
</template>
