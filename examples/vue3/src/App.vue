<script setup lang="ts">
import { LeaferApp } from 'leafer-vue'
import { ref } from 'vue'

const x = ref(1)
function rightMove() {
  x.value += 10
}
</script>

<template>
  <div style="display: flex;">
    <LeaferApp>
      <!-- <template
      v-for="row in 1000"
      :key="row"
      >
      <Rect
        v-for="col in 1000"
        :key="col"
        :x="(row - 1) * 20" :y="(col - 1) * 20"
      />
    </template> -->

      <Box>
        <Rect
          :x="x"
          :width="20"
          :height="20"
          fill="red"
        />
        <Rect
          :x="x + 20"
          :width="20"
          :height="20"
          fill="red"
        />
        <Text :x="x + 40" fill="red" text="aa">
          aaaa
        </Text>
      </Box>
    </LeaferApp>
    <button @click="rightMove">
      rightMove
    </button>
  </div>
</template>
