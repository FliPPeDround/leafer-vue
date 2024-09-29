<script setup lang="ts">
import type { WatchEvent } from 'leafer-ui'
import { LeaferApp } from 'leafer-vue'
import { ref } from 'vue'

const width = ref(50)
const changeData = ref({})
function handleLayout(e: WatchEvent) {
  changeData.value = e.data
}
</script>

<template>
  {{ changeData }}
  <br>
  <button @click="width += 5">
    增加
  </button>
  <LeaferApp :width="672" :height="340" type="draw">
    <Leafer @watch-data="handleLayout">
      <Rect
        :width="width"
        :height="50"
        fill="#00a98e"
      />
    </Leafer>
  </LeaferApp>
</template>
