/**
 * Example Pinia store demonstrating a basic state management pattern
 *
 * To use in a component:
 * ```typescript
 * const store = useExampleStore();
 * const { exampleBoolean } = storeToRefs(store);
 * // or
 * store.exampleBoolean
 * ```
 */
import { defineStore } from "pinia";

export const useExampleStore = defineStore("example", () => {
  // State
  const exampleBoolean = ref(false);

  // Actions
  const setExampleBoolean = (value: boolean) => {
    exampleBoolean.value = value;
  };

  // Return public API
  return { exampleBoolean, setExampleBoolean };
});
