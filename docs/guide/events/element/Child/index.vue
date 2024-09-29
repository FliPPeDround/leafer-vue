<script setup lang="ts">
import { LeaferApp } from 'leafer-vue'
import { ref } from 'vue'

const count = ref(2)
function handleAdd() {
  alert('child-add')
}
function handleRemove() {
  alert('child-remove')
}
</script>

<template>
  <input v-model="count" type="number" min="1" max="5">
  <LeaferApp :width="672" :height="340" type="draw">
    <Leafer
      @child-add="handleAdd"
      @child-remove="handleRemove"
    >
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
