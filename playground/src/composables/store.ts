import {
  genCompilerSfcLink,
  genImportMap,
} from '@/utils/dependency'
import { utoa } from '@/utils/encode'
import {
  compileFile,
  type ImportMap,
  mergeImportMap,
  type StoreState,
  useStore as useReplStore,
} from '@vue/repl'
import mainCode from '../template/main.vue?raw'

export interface Initial {
  serializedState?: string
  initialized?: () => void
}
export type VersionKey = 'vue' | 'leaferUI' | 'leaferVue' | 'typescript'
export type Versions = Record<VersionKey, string>
export interface UserOptions {
  styleSource?: string
  showHidden?: boolean
}
export type SerializeState = Record<string, string> & {
  _o?: UserOptions
}

export const IMPORT_MAP = 'import-map.json'
export const TSCONFIG = 'tsconfig.json'

export function useStore(initial: Initial) {
  const versions = reactive<Versions>({
    vue: 'latest',
    leaferUI: 'latest',
    leaferVue: 'latest',
    typescript: 'latest',
  })
  const userOptions: UserOptions = {}

  const builtinImportMap = computed<ImportMap>(() => {
    const importMap = genImportMap(versions)
    return importMap
  })

  const storeState: Partial<StoreState> = toRefs(
    reactive({
      vueVersion: computed(() => versions.vue),
      typescriptVersion: versions.typescript,
      builtinImportMap,
      template: {
        welcomeSFC: mainCode,
      },
      sfcOptions: {
        script: {
          propsDestructure: true,
        },
      },
    }),
  )
  const store = useReplStore(storeState)
  setVueVersion(versions.vue).then(() => {
    initial.initialized?.()
  })

  watch(
    builtinImportMap,
    (newBuiltinImportMap) => {
      const importMap = JSON.parse(store.files[IMPORT_MAP].code)
      store.files[IMPORT_MAP].code = JSON.stringify(
        mergeImportMap(importMap, newBuiltinImportMap),
        undefined,
        2,
      )
    },
    { deep: true },
  )

  function init() {
    watchEffect(() => {
      compileFile(store, store.activeFile).then(errs => (store.errors = errs))
    })
    for (const [filename, file] of Object.entries(store.files)) {
      if (filename === store.activeFilename)
        continue
      compileFile(store, file).then(errs => store.errors.push(...errs))
    }

    watch(
      () => [
        store.files[TSCONFIG]?.code,
        store.typescriptVersion,
        store.locale,
        store.dependencyVersion,
        store.vueVersion,
      ],
      useDebounceFn(() => store.reloadLanguageTools?.(), 300),
      { deep: true },
    )
  }
  function serialize() {
    const state: SerializeState = { ...store.getFiles() }
    state._o = userOptions
    return utoa(JSON.stringify(state))
  }
  // function deserialize(text: string): SerializeState {
  //   const state = JSON.parse(atou(text))
  //   return state
  // }

  async function setVueVersion(version: string) {
    store.compiler = await import(
      /* @vite-ignore */ genCompilerSfcLink(version)
    )
    versions.vue = version
  }
  async function setVersion(key: VersionKey, version: string) {
    switch (key) {
      case 'vue':
        await setVueVersion(version)
        break
      case 'leaferUI':
        versions.leaferUI = version
        break
      case 'leaferVue':
        versions.leaferVue = version
        break
      case 'typescript':
        store.typescriptVersion = version
        break
    }
  }

  const utils = {
    versions,
    setVersion,
    serialize,
    init,
  }
  Object.assign(store, utils)

  return store as typeof store & typeof utils
}

export type Store = ReturnType<typeof useStore>
