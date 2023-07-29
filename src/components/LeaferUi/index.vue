<script setup lang="ts">
import LeaferView from './_view.vue'
import type { ViewProps } from './props'

const props = defineProps<ViewProps>()
</script>

<template>
  <canvas id="__leafer-ui_container">
    <Suspense>
      <template #default>
        <LeaferView v-bind="props">
          <slot />
        </LeaferView>
      </template>
    </Suspense>
  </canvas>
</template>
