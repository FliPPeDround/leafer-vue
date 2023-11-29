<script setup lang="ts">
import { LeaferApp } from 'leafer-vue'
import { ref } from 'vue'

const show = ref(true)
function rightMove() {
  show.value = !show.value
}
</script>

<template>
  <div>
    <LeaferApp>
      <Leafer type="draw" fill="red">
        <Rect
          v-bind="{ width: 800, height: 600, fill: 'gray' }"
        />
      </Leafer>
      <Leafer fill="red">
        <Rect
          v-if="show"
          v-bind="{ x: 100, y: 100, fill: '#32cd79', draggable: true }"
        />
        <Text
          v-bind="{ x: 210, y: 100, fill: '#32cd79', draggable: true, text: 'text' }"
        />
      </Leafer>
      <Leafer type="draw" fill="red" @tap="rightMove">
        <Rect
          v-bind="{ x: 200, y: 200, stroke: 'blue', draggable: true }"
        />
      </Leafer>
    </LeaferApp>
    <button @click="rightMove">
      rightMove
    </button>
  </div>
</template>
