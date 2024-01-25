import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore(
  'counter',
  () => {
    const count = ref(0)
    const count0 = ref(1)
    const doubleCount = computed(() => count.value * 2)

    const increment = () => {
      count.value++
    }

    const decrement = () => {
      count.value--
    }

    return { count, count0, doubleCount, increment, decrement }
  }
  // {
  //   persist: true
  // }
)
