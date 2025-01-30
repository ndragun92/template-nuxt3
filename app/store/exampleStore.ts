import { defineStore } from 'pinia'
export const useExampleStore = defineStore('example', () => {
  const exampleBoolean = ref(false)

  const setExampleBoolean = (value: boolean) => {
    exampleBoolean.value = value
  }

  return { exampleBoolean, setExampleBoolean }
})
