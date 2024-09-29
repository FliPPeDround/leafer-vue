<script setup lang="ts">
import { LeaferApp } from 'leafer-vue'
import { ref } from 'vue'

const count = ref(2)
function handleLayout() {
  alert('Layout !')
}
</script>

<template>
  <button @click="count++">
    添加元素
  </button>
  <LeaferApp :width="672" :height="340" type="draw">
    <Leafer @layout="handleLayout">
      <Rect
        v-for="item in count"
        :key="item"
        :width="50"
        :height="50"
        :x="(item - 1) * 60"
        :y="0"
        fill="#00a98e"
      />
    </Leafer>
  </LeaferApp>
</template>
