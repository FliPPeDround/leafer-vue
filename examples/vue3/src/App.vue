<script setup lang="ts">
import { LeaferApp } from 'leafer-vue'
import { nextTick, ref } from 'vue'

const count = ref(1)

function handleReady() {
  // console.log('leafer ready')
}
</script>

<template>
  {{ count }}
  <!-- <input v-model="count" min="1" max="5"> -->
  <button @click="nextTick(() => count++)">
    add
  </button>
  <button @click="count--">
    del
  </button>
  <LeaferApp :width="672" :height="340" type="draw">
    <Leafer @leafer-ready="handleReady">
      <template
        v-for="(item, index) in count"
        :key="index"
      >
        <Rect
          :width="50"
          :height="50"
          :x="index * 60"
          :y="0"
          fill="#00a98e"
        />
      </template>
    </Leafer>
  </LeaferApp>
</template>
