<script setup lang="ts">
import { LeaferApp } from 'leafer-vue'
import { ref } from 'vue'

const show = ref(true)
function rightMove() {
  show.value = !show.value
}

const width = ref(500)
function changeWidth() {
  width.value += 50
}
</script>

<template>
  <div>
    <LeaferApp :width="width" :height="500">
      <Leafer>
        <Rect
          v-bind="{ width: 800, height: 600, fill: 'gray' }"
        />
      </Leafer>
      <Leafer fill="red">
        <Group :draggable="true">
          <Rect
            v-bind="{ x: 100, y: 200, stroke: 'blue' }"
          />
          <Star
            v-bind="{
              x: 100,
              y: 200,
              width: 100,
              fill: '#32cd79',
            }"
          />
        </Group>
      </Leafer>
      <Leafer type="draw" fill="red" @tap="rightMove">
        <Box>
          <Rect
            v-bind="{ x: 0, y: 200, stroke: 'blue', draggable: true }"
          />
          <Star />
        </Box>
      </Leafer>
    </LeaferApp>
    <button @click="changeWidth">
      rightMove
    </button>
  </div>
</template>
