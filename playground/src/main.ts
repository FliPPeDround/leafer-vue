import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App)
app.directive('focus', (el, binding) => {
  console.log(binding)
})
app.directive('demo', (el, binding) => {
  console.log(binding.value.color) // => "white"
  console.log(binding.value.text) // => "hello!"
})
app.mount('#app')
