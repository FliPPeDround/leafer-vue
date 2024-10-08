<script setup lang="ts">
import { LeaferApp } from 'leafer-vue'
import { ref } from 'vue'

const rotation = ref(0)
function animate() {
  rotation.value += 1
  requestAnimationFrame(animate)
}
animate()

const fill = ref('#66A659')
function changeColor() {
  fill.value = `#${Math.floor(Math.random() * 0xFFFFFF).toString(16)}`
}

function handleClick() {
  window.open('https://leafer-vue.netlify.app/play/#eyJBcHAudnVlIjoiPHNjcmlwdCBzZXR1cCBsYW5nPVwidHNcIj5cbmltcG9ydCB7IExlYWZlckFwcCB9IGZyb20gJ2xlYWZlci12dWUnXG5pbXBvcnQgeyByZWYgfSBmcm9tICd2dWUnXG5cbmNvbnN0IHJvdGF0aW9uID0gcmVmKDApXG5mdW5jdGlvbiBhbmltYXRlKCkge1xuICByb3RhdGlvbi52YWx1ZSArPSAxXG4gIHJlcXVlc3RBbmltYXRpb25GcmFtZShhbmltYXRlKVxufVxuYW5pbWF0ZSgpXG5cbmNvbnN0IGZpbGwgPSByZWYoJyM2NkE2NTknKVxuZnVuY3Rpb24gY2hhbmdlQ29sb3IoKSB7XG4gIGZpbGwudmFsdWUgPSBgIyR7TWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMHhGRkZGRkYpLnRvU3RyaW5nKDE2KX1gXG59XG48L3NjcmlwdD5cblxuPHRlbXBsYXRlPlxuICA8TGVhZmVyQXBwIDp3aWR0aD1cIjY3MlwiIDpoZWlnaHQ9XCIzNDBcIiB0eXBlPVwiZHJhd1wiPlxuICAgIDxMZWFmZXIgdHlwZT1cImRyYXdcIiBAdGFwPVwiY2hhbmdlQ29sb3JcIj5cbiAgICAgIDx0ZW1wbGF0ZVxuICAgICAgICB2LWZvcj1cInJvdyBpbiAzNFwiXG4gICAgICAgIDprZXk9XCJyb3dcIlxuICAgICAgPlxuICAgICAgICA8U3RhclxuICAgICAgICAgIHYtZm9yPVwiY29sIGluIDE3XCJcbiAgICAgICAgICA6a2V5PVwiY29sXCJcbiAgICAgICAgICBhcm91bmQ9XCJjZW50ZXJcIlxuICAgICAgICAgIDpyb3RhdGlvbj1cInJvdGF0aW9uXCJcbiAgICAgICAgICA6eD1cIihyb3cgLSAxKSAqIDIwXCIgOnk9XCIoY29sIC0gMSkgKiAyMFwiXG4gICAgICAgICAgOndpZHRoPVwiMTVcIiA6aGVpZ2h0PVwiMTVcIlxuICAgICAgICAgIDpmaWxsPVwiZmlsbFwiXG4gICAgICAgICAgOmRyYWdnYWJsZT1cInRydWVcIlxuICAgICAgICAvPlxuICAgICAgPC90ZW1wbGF0ZT5cbiAgICA8L0xlYWZlcj5cbiAgPC9MZWFmZXJBcHA+XG48L3RlbXBsYXRlPlxuIiwidHNjb25maWcuanNvbiI6IntcbiAgXCJjb21waWxlck9wdGlvbnNcIjoge1xuICAgIFwidGFyZ2V0XCI6IFwiRVNOZXh0XCIsXG4gICAgXCJqc3hcIjogXCJwcmVzZXJ2ZVwiLFxuICAgIFwibW9kdWxlXCI6IFwiRVNOZXh0XCIsXG4gICAgXCJtb2R1bGVSZXNvbHV0aW9uXCI6IFwiQnVuZGxlclwiLFxuICAgIFwidHlwZXNcIjogW1wibGVhZmVyLXZ1ZVwiXSxcbiAgICBcImFsbG93SW1wb3J0aW5nVHNFeHRlbnNpb25zXCI6IHRydWUsXG4gICAgXCJhbGxvd0pzXCI6IHRydWUsXG4gICAgXCJjaGVja0pzXCI6IHRydWVcbiAgfSxcbiAgXCJ2dWVDb21waWxlck9wdGlvbnNcIjoge1xuICAgIFwidGFyZ2V0XCI6IDMuM1xuICB9XG59XG4iLCJQbGF5Z3JvdW5kTWFpbi52dWUiOiI8c2NyaXB0IHNldHVwPlxuaW1wb3J0IEFwcCBmcm9tICcuL0FwcC52dWUnXG48L3NjcmlwdD5cblxuPHRlbXBsYXRlPlxuICA8QXBwIC8+XG48L3RlbXBsYXRlPlxuIiwiaW1wb3J0LW1hcC5qc29uIjoie1xuICBcImltcG9ydHNcIjoge1xuICAgIFwidnVlXCI6IFwiaHR0cHM6Ly91bnBrZy5jb20vdnVlQGxhdGVzdC9kaXN0L3Z1ZS5lc20tYnJvd3Nlci5wcm9kLmpzXCIsXG4gICAgXCJsZWFmZXItdWlcIjogXCJodHRwczovL3VucGtnLmNvbS9sZWFmZXItdWlAbGF0ZXN0L2Rpc3Qvd2ViLm1vZHVsZS5taW4uanNcIixcbiAgICBcImxlYWZlci12dWVcIjogXCJodHRwczovL3VucGtnLmNvbS9sZWFmZXItdnVlQGxhdGVzdC9kaXN0L3dlYi5tb2R1bGUubWluLmpzXCJcbiAgfSxcbiAgXCJzY29wZXNcIjoge31cbn0iLCJfbyI6e319', '_blank')
}
</script>

<template>
  <div b="1 solid gray-500/20" flex="~ col" items-center pt2 rounded>
    <LeaferApp :width="672" :height="340" type="draw">
      <Leafer type="draw" @tap="changeColor">
        <template
          v-for="row in 34"
          :key="row"
        >
          <Star
            v-for="col in 17"
            :key="col"
            around="center"
            :rotation="rotation"
            :x="(row - 1) * 20" :y="(col - 1) * 20"
            :width="15" :height="15"
            :fill="fill"
            :draggable="true"
          />
        </template>
      </Leafer>
    </LeaferApp>
    <div b-t="1 solid gray-500/20" p2 flex justify-end w-full>
      <div
        i-file-icons:test-generic
        cursor-pointer hover="c-#66A659"
        @click="handleClick"
      />
    </div>
  </div>
</template>
