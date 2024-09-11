<script setup lang="ts">
import type { PropertyEvent } from 'leafer-ui'
import { LeaferApp } from 'leafer-vue'
import { ref } from 'vue'

const width = ref(50)

const oldValue = ref(50)
const newValue = ref(50)
function handelChange(e: PropertyEvent) {
  oldValue.value = e.oldValue as number
  newValue.value = e.newValue as number
}
</script>

<template>
  <div>
    <div>Old Width: {{ oldValue }} ;</div>
    <div>New Width: {{ newValue }} ;</div>
  </div>
  <LeaferApp :width="672" :height="340" type="draw">
    <Leafer>
      <Rect
        :width="width"
        :height="50"
        fill="#00a98e"
        @tap="width += 10"
        @property-change="handelChange"
      />
    </Leafer>
  </LeaferApp>
</template>
