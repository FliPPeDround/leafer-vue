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
  window.open('https://leafer-vue.netlify.app/play/#eyJBcHAudnVlIjoiPHNjcmlwdCBzZXR1cCBsYW5nPVwidHNcIj5cbmltcG9ydCB7IExlYWZlckFwcCB9IGZyb20gJ2xlYWZlci12dWUnXG5pbXBvcnQgeyByZWYgfSBmcm9tICd2dWUnXG5cbmNvbnN0IHJvdGF0aW9uID0gcmVmKDApXG5mdW5jdGlvbiBhbmltYXRlKCkge1xuICByb3RhdGlvbi52YWx1ZSArPSAxXG4gIHJlcXVlc3RBbmltYXRpb25GcmFtZShhbmltYXRlKVxufVxuYW5pbWF0ZSgpXG5cbmNvbnN0IGZpbGwgPSByZWYoJyM2NkE2NTknKVxuZnVuY3Rpb24gY2hhbmdlQ29sb3IoKSB7XG4gIGZpbGwudmFsdWUgPSBgIyR7TWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMHhGRkZGRkYpLnRvU3RyaW5nKDE2KX1gXG59XG48L3NjcmlwdD5cblxuPHRlbXBsYXRlPlxuICA8TGVhZmVyQXBwIDp3aWR0aD1cIjY3MlwiIDpoZWlnaHQ9XCIzNDBcIiB0eXBlPVwiZHJhd1wiPlxuICAgIDxMZWFmZXIgdHlwZT1cImRyYXdcIiBAdGFwPVwiY2hhbmdlQ29sb3JcIj5cbiAgICAgIDx0ZW1wbGF0ZVxuICAgICAgICB2LWZvcj1cInJvdyBpbiAzNFwiXG4gICAgICAgIDprZXk9XCJyb3dcIlxuICAgICAgPlxuICAgICAgICA8U3RhclxuICAgICAgICAgIHYtZm9yPVwiY29sIGluIDE3XCJcbiAgICAgICAgICA6a2V5PVwiY29sXCJcbiAgICAgICAgICBhcm91bmQ9XCJjZW50ZXJcIlxuICAgICAgICAgIDpyb3RhdGlvbj1cInJvdGF0aW9uXCJcbiAgICAgICAgICA6eD1cIihyb3cgLSAxKSAqIDIwICsgNlwiIDp5PVwiKGNvbCAtIDEpICogMjAgKyA2XCJcbiAgICAgICAgICA6d2lkdGg9XCIxMlwiIDpoZWlnaHQ9XCIxMlwiXG4gICAgICAgICAgOmZpbGw9XCJmaWxsXCJcbiAgICAgICAgICA6ZHJhZ2dhYmxlPVwidHJ1ZVwiXG4gICAgICAgIC8+XG4gICAgICA8L3RlbXBsYXRlPlxuICAgIDwvTGVhZmVyPlxuICA8L0xlYWZlckFwcD5cbjwvdGVtcGxhdGU+XG4iLCJ0c2NvbmZpZy5qc29uIjoie1xuICBcImNvbXBpbGVyT3B0aW9uc1wiOiB7XG4gICAgXCJ0YXJnZXRcIjogXCJFU05leHRcIixcbiAgICBcImpzeFwiOiBcInByZXNlcnZlXCIsXG4gICAgXCJtb2R1bGVcIjogXCJFU05leHRcIixcbiAgICBcIm1vZHVsZVJlc29sdXRpb25cIjogXCJCdW5kbGVyXCIsXG4gICAgXCJ0eXBlc1wiOiBbXCJsZWFmZXItdnVlXCJdLFxuICAgIFwiYWxsb3dJbXBvcnRpbmdUc0V4dGVuc2lvbnNcIjogdHJ1ZSxcbiAgICBcImFsbG93SnNcIjogdHJ1ZSxcbiAgICBcImNoZWNrSnNcIjogdHJ1ZVxuICB9LFxuICBcInZ1ZUNvbXBpbGVyT3B0aW9uc1wiOiB7XG4gICAgXCJ0YXJnZXRcIjogMy4zXG4gIH1cbn1cbiIsIlBsYXlncm91bmRNYWluLnZ1ZSI6IjxzY3JpcHQgc2V0dXA+XG5pbXBvcnQgQXBwIGZyb20gJy4vQXBwLnZ1ZSdcbjwvc2NyaXB0PlxuXG48dGVtcGxhdGU+XG4gIDxBcHAgLz5cbjwvdGVtcGxhdGU+XG4iLCJpbXBvcnQtbWFwLmpzb24iOiJ7XG4gIFwiaW1wb3J0c1wiOiB7XG4gICAgXCJ2dWVcIjogXCJodHRwczovL3VucGtnLmNvbS92dWVAbGF0ZXN0L2Rpc3QvdnVlLmVzbS1icm93c2VyLnByb2QuanNcIixcbiAgICBcImxlYWZlci11aVwiOiBcImh0dHBzOi8vdW5wa2cuY29tL2xlYWZlci11aUBsYXRlc3QvZGlzdC93ZWIubW9kdWxlLm1pbi5qc1wiLFxuICAgIFwibGVhZmVyLXZ1ZVwiOiBcImh0dHBzOi8vdW5wa2cuY29tL2xlYWZlci12dWVAbGF0ZXN0L2Rpc3QvaW5kZXguanNcIlxuICB9LFxuICBcInNjb3Blc1wiOiB7fVxufSIsIl9vIjp7fX0=', '_blank')
}
</script>

<template>
  <ClientOnly>
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
              :x="(row - 1) * 20 + 6" :y="(col - 1) * 20 + 6"
              :width="12" :height="12"
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
  </ClientOnly>
</template>
