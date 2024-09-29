<script setup lang="ts">
import { LeaferApp } from 'leafer-vue'
import '@leafer-in/editor'
</script>

<template>
  <LeaferApp :width="672" :height="340" type="draw" :editor="{}">
    <Leafer>
      <Text
        text="Hello Leafer Vue"
        fill="#00a98e"
        font-weight="black"
        :italic="true"
        :x="100"
        :y="100"
        editable
        :font-size="60"
      />
    </Leafer>
  </LeaferApp>
</template>
