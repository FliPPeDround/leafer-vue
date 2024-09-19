<script setup lang="ts">
import { Rect as LfRect } from 'leafer-ui'
import { LeaferApp } from 'leafer-vue'
import { ref } from 'vue'

const count = ref(3)
class Custom extends LfRect {
  get __tag() {
    /**
     * 1. 定义全局唯一的 tag 名称
     * 2. tag名称不能和自定义类名相同
     */
    return 'CustomRect'
  }
}

Custom.registerUI()

const test = new Custom()
</script>

<template>
  {{ count }}
  <button @click="count++">
    add
  </button>
  <button @click="count--">
    del
  </button>
  <LeaferApp :width="672" :height="340" type="draw">
    <Leafer>
      <Rect
        v-for="(_, i) in count"
        :key="i"
        :width="40"
        :height="40"
        fill="#00a98e"
        :x="(i % 5) * 40"
        :y="Math.floor(i / 5) * 40"
      />
      <test />
    </Leafer>
  </LeaferApp>
</template>
