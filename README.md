# leafer-vue

<span class="badge-npmdownloads">
  <a href="https://www.npmjs.com/package/leafer-vue">
    <img src="https://img.shields.io/npm/v/leafer-vue.svg" alt="Version">
  </a>
  <a href="https://www.npmjs.com/package/leafer-vue">
    <img src="https://img.shields.io/npm/l/leafer-vue.svg" alt="License">
  </a>
</span>

## leafer-vue is a vue component library based on leafer-ui and vue3

## Features

- ⚡️ Vue 3
<!-- - 📦 [Components auto importing](./src/components) -->

- 🦾 TypeScript

## Install

```bash
npm install leafer-vue leafer-ui
```

## Usage

```html
<script setup lang="ts">
import { lfFrame, lfRect, lfUi } from 'leafer-vue'
</script>

<template>
  <lfUi :width="500" :height="500" fill="#000">
    <lfFrame :width="300" :height="300" fill="#0f0">
      <lfRect
        :width="100" :height="100" fill="#f00"
        :draggable="true"
        @tap="console.log('tag')"
      />
    </lfFrame>
  </lfUi>
</template>
```
