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
      <Leafer @leafer-ready="() => console.log('ready')">
        <Rect
          v-bind="{ width: 800, height: 600, fill: 'gray' }"
        />
      </Leafer>
      <Leafer fill="red" type="draw">
        <Group :draggable="true">
          <Rect
            v-bind="{ x: 100, y: 200, stroke: 'blue', hoverStyle: { fill: 'red' } }"
          />
          <Star
            v-bind="{
              x: 100,
              y: 200,
              width: 100,
              fill: '#32cd79',
            }"
          />
          <Text
            text="Welcome to Leafer Vue"
            fill="#000"
            :padding="140"
          />
          <Polygon
            :points="[10, 90, 10, 10, 50, 70, 90, 10, 90, 90]"
            fill="#ffe04b"
          />
        </Group>
      </Leafer>
      <Leafer type="draw" fill="red" @tap="rightMove">
        <Box>
          <Rect
            v-bind="{ x: 0, y: 200, stroke: 'blue', draggable: true }"
          />
        </Box>
      </Leafer>
    </LeaferApp>
    <button @click="changeWidth">
      rightMove
    </button>
  </div>
</template>
