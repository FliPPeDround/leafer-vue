<script setup lang="ts">
import { LeaferApp } from 'leafer-vue'
import { ref } from 'vue'
import '@leafer-in/editor'

const count = ref(3)
</script>

<template>
  {{ count }}
  <button @click="count++">
    add
  </button>
  <button @click="count--">
    del
  </button>
  <LeaferApp :width="672" :height="340" type="draw" :editor="{}">
    <Leafer>
      <Rect
        v-for="(_, i) in count"
        :key="i"
        :width="40"
        :height="40"
        fill="#00a98e"
        :x="(i % 5) * 40"
        :y="Math.floor(i / 5) * 40"
        editable
        @pointer-down="console.log('down')"
      />
    </Leafer>
  </LeaferApp>
</template>
