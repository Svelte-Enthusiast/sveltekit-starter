import { derived} from 'svelte/store'

// dedupe updates so our store only notifies when changes happen
export function dedupe(store){
  let previous

  return derived(store, ($value, set) => {
    if ($value !== previous) {
      previous = $value
      set($value)
    }
  })
}