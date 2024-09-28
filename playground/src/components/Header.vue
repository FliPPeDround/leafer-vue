<script setup lang="ts">
import type { Store, VersionKey } from '@/composables/store'
import type { Ref } from 'vue'
import {
  getSupportedLfUIVersions,
  getSupportedLfVUEVersions,
  getSupportedTSVersions,
  getSupportedVueVersions,
} from '@/utils/dependency'

const { store } = defineProps<{
  store: Store
}>()
const emit = defineEmits<{
  (e: 'refresh'): void
}>()

const dark = useDark()
const toggleDark = useToggle(dark)

interface Version {
  text: string
  published: Ref<string[]>
  active: string
}

const versions = reactive<Record<VersionKey, Version>>({
  leaferUI: {
    text: 'Leafer UI',
    published: getSupportedLfUIVersions(),
    active: store.versions.leaferUI,
  },
  leaferVue: {
    text: 'Leafer Vue',
    published: getSupportedLfVUEVersions(),
    active: store.versions.leaferVue,
  },
  vue: {
    text: 'Vue',
    published: getSupportedVueVersions(),
    active: store.versions.vue,
  },
  typescript: {
    text: 'TypeScript',
    published: getSupportedTSVersions(),
    active: store.versions.typescript,
  },
})

async function setVersion(key: VersionKey, v: string) {
  versions[key].active = `loading...`
  await store.setVersion(key, v)
  versions[key].active = v
}

async function copyLink() {
  await navigator.clipboard.writeText(location.href)
  ElMessage.success('Sharable URL has been copied to clipboard.')
}

function refreshView() {
  emit('refresh')
}
</script>

<template>
  <nav>
    <div leading="[var(--nav-height)]" m-0 flex items-center font-medium>
      <img
        relative
        mr-2
        h-24px
        v="mid"
        top="-2px"
        alt="logo"
        src="../assets/logo.svg"
      >
      <div flex="~ gap-1" items-center lt-sm-hidden>
        <div text-xl>
          Leafer Vue Playground
        </div>
      </div>
    </div>

    <div flex="~ gap-2" items-center>
      <div
        v-for="(v, key) of versions"
        :key="key"
        flex="~ gap-2"
        items-center
        lt-lg-hidden
      >
        <span>{{ v.text }}:</span>
        <el-select
          :model-value="v.active"
          size="small"
          fit-input-width
          w-36
          @update:model-value="setVersion(key, $event)"
        >
          <el-option v-for="ver of v.published" :key="ver" :value="ver">
            {{ ver }}
          </el-option>
        </el-select>
      </div>

      <div flex="~ gap-4" text-lg>
        <button i-ri-refresh-line hover:color-primary @click="refreshView" />
        <button i-ri-share-line hover:color-primary @click="copyLink" />
        <button
          i-ri-sun-line
          dark:i-ri-moon-line
          hover:color-primary
          @click="toggleDark()"
        />
        <a
          href="https://github.com/FliPPeDround/leafer-vue"
          target="_blank"
          flex
          hover:color-primary
        >
          <button title="View on GitHub" i-ri-github-fill />
        </a>

        <el-popover trigger="click" width="300px">
          <Settings />
          <template #reference>
            <button i-ri:settings-line hover:color-primary />
          </template>
        </el-popover>
      </div>
    </div>
  </nav>
</template>

<style lang="scss">
nav {
  --bg: #fff;
  --bg-light: #fff;
  --border: #ddd;

  --at-apply: 'box-border flex justify-between px-4 z-999 relative';

  height: var(--nav-height);
  background-color: var(--bg);
  box-shadow: 0 0 6px var(--el-color-primary);

  .el-select {
    width: 140px;
  }
}

.dark nav {
  --bg: #1a1a1a;
  --bg-light: #242424;
  --border: #383838;

  --at-apply: 'shadow-none';
  border-bottom: 1px solid var(--border);
}
</style>
