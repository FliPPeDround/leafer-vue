<script setup lang="ts">
import { Rect } from 'leafer-ui'
import { LeaferApp } from 'leafer-vue'

/** 类名不能为Custom */
class CustomRect extends Rect {
  get __tag() {
    /**
     * 1. 定义全局唯一的 tag 名称
     */
    return 'CustomRect'
  }
}

CustomRect.registerUI()
</script>

<template>
  <LeaferApp :width="672" :height="340" type="draw">
    <Leafer>
      <Custom
        :is="CustomRect"
        :x="100" :y="100"
        :width="200" :height="100"
        fill="red"
      />
    </Leafer>
  </LeaferApp>
</template>
