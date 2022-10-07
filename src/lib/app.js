import { browser } from '$app/environment'
import { readable } from 'svelte/store'

const firebaseConfig = (
  JSON.parse(import.meta.env.VITE_FIREBASE_CONFIG)
)


// load the firebase app on demand by putting it in a store
// this can then be used in derived stores for auth, firestore, and other services
function createApp() {
  let app

  const { subscribe } = readable(undefined, (set) => {
    async function init() {
      if (!app) {
        const { initializeApp } = await import('firebase/app')
        app = initializeApp(firebaseConfig)
      }
      set(app)
    }

    if (browser) init()
  })

  return { subscribe }
}

export const app = createApp()
