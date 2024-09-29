import type { Versions } from '@/composables/store'
import type { ImportMap } from '@vue/repl'
import type { MaybeRef } from '@vueuse/core'
import type { Ref } from 'vue'
import { IS_DEV } from '@/constants'
import { gte } from 'semver'

export interface Dependency {
  pkg?: string
  version?: string
  devPath?: string
  path: string
}

export type Cdn = 'unpkg' | 'jsdelivr' | 'jsdelivr-fastly'
export const cdn = useLocalStorage<Cdn>('setting-cdn', 'unpkg')

export function genCdnLink(pkg: string, version: string | undefined, path: string) {
  version = version ? `@${version}` : ''
  switch (cdn.value) {
    case 'unpkg':
      return `https://unpkg.com/${pkg}${version}${path}`
    case 'jsdelivr':
      return `https://cdn.jsdelivr.net/npm/${pkg}${version}${path}`
    case 'jsdelivr-fastly':
      return `https://fastly.jsdelivr.net/npm/${pkg}${version}${path}`
  }
}

export function genCompilerSfcLink(version: string) {
  return genCdnLink(
    '@vue/compiler-sfc',
    version,
    '/dist/compiler-sfc.esm-browser.js',
  )
}

export function genImportMap(version: Partial<Versions> = {}): ImportMap {
  const deps: Record<string, Dependency> = {
    'vue': {
      version: version.vue,
      path: '/dist/vue.esm-browser.prod.js',
    },
    'leafer-ui': {
      version: version.leaferUI,
      path: '/dist/web.module.min.js',
    },
    'leafer-vue': {
      version: version.leaferVue,
      path: '/dist/web.module.min.js',
      devPath: `${location.origin}/leafer-vue.proxy.js`,
    },
  }

  return {
    imports: Object.fromEntries(
      Object.entries(deps).map(([key, dep]) => [
        key,
        IS_DEV && dep.devPath
          ? dep.devPath
          : genCdnLink(dep.pkg ?? key, dep.version, dep.path),
      ]),
    ),
  }
}

export function getVersions(pkg: MaybeRef<string>) {
  const url = computed(
    () => `https://data.jsdelivr.com/v1/package/npm/${unref(pkg)}`,
  )
  return useFetch(url, {
    initialData: [],
    afterFetch: (ctx) => {
      ctx.data = ctx.data.versions
      return ctx
    },
    refetch: true,
  }).json<string[]>().data as Ref<string[]>
}

export function getSupportedVueVersions() {
  const versions = getVersions('vue')
  return computed(() =>
    versions.value.filter(version => gte(version, '3.2.0')),
  )
}

export function getSupportedTSVersions() {
  const versions = getVersions('typescript')
  return computed(() =>
    versions.value.filter(
      version => !version.includes('dev') && !version.includes('insiders'),
    ),
  )
}

export function getSupportedLfUIVersions() {
  const versions = getVersions('leafer-ui')
  return computed(() => {
    return versions.value.filter(version => gte(version, '1.0.0'))
  })
}

export function getSupportedLfVUEVersions() {
  const versions = getVersions('leafer-vue')
  return computed(() => {
    return versions.value.filter(version => gte(version, '1.1.0'))
  })
}
