import { derived } from 'svelte/store'
import { browser } from '$app/environment'
import { app } from './app'

// load the firebase auth client as a store and provide an API to access it's methods
// this depends on the app store and will also only be loaded on demand
// so no firebase JS loaded unless the page needs it
const createAuth = () => {
  let auth

  const { subscribe } = derived(
    app,
    ($app, set) => {
      async function init() {
        if ($app && !auth) {
          const { getAuth, connectAuthEmulator } = await import('firebase/auth')
          auth = getAuth($app)
          set(auth)
        }
      }

      if (browser) init()
    }
  )

  async function providerFor(name) {
    const { GoogleAuthProvider } = await import('firebase/auth')
    switch (name) {
      case 'google': return new GoogleAuthProvider()
      default: throw 'unknown provider ' + name
    }
  }

  async function signInWith(name) {
    const { signInWithRedirect } = await import('firebase/auth')
    const provider = await providerFor(name)
    await signInWithRedirect(auth, provider)
  }

  async function signOut() {
    const { signOut } = await import('firebase/auth')
    await signOut(auth)
  }

  return {
    subscribe,
    signInWith,
    signOut,
  }
}

export const auth = createAuth()
