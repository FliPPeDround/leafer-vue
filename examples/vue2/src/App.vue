<script setup lang="ts">
import { lfFrame, lfLeafer, lfRect } from 'leafer-vue'
import { ref } from 'vue'

const width = ref(300)
const color = ref('#000')
function changeColor() {
  console.log('changeColor')
  color.value = '#fff'
}

const showIt = ref(true)

const fill = ref('#32cd79')
function changeFill() {
  fill.value = `#${Math.floor(Math.random() * 0xFFFFFF).toString(16)}`
}
</script>

<template>
  <div>
    <lfLeafer
      v-if="showIt"
      v-bind="{
        width,
        height: 100,
        fill: '#fff',
      }"
      @tap="console.log('Tap')"
    >
      <lfFrame
        v-bind="{
          width,
          height: 100,
          fill: '#0f0',
          draggable: true,
        }"
        @double_click="(e) => console.log(e)"
        @click="console.log('Click')"
        @pointer-enter="console.log('Down')"
        @tap="showIt = !showIt"
      >
        <lfRect
          v-bind="{
            x: 100,
            width: width - 100,
            height: 100,
            fill: {
              type: 'linear',
              stops: [{ offset: 0, color: '#FF4B4B' }, { offset: 1, color }],
            },
            draggable: true,
            onTap: changeColor,
          }"
          @tap="changeColor"
        />
      </lfFrame>
    </lfLeafer>
    <button @click="width = width + 100">
      Click
    </button>
  </div>
</template>
