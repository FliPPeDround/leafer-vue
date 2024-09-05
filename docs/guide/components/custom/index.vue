<script setup lang="ts">
import { LeaferApp } from 'leafer-vue'
import { Rect } from 'leafer-ui'

class Custom extends Rect {
  get __tag() {
    /**
     * 1. 定义全局唯一的 tag 名称
     * 2. tag名称不能和自定义类名相同
     */
    return 'CustomRect'
  }
}

Custom.registerUI()
</script>

<template>
  <LeaferApp :width="672" :height="340" type="draw">
    <Leafer>
      <CustomRect
        :x="100" :y="100"
        :width="200" :height="100"
        fill="red"
      />
    </Leafer>
  </LeaferApp>
</template>
