import { Auth } from './firebase-client-init'

export default async function({ store }) {
  return new Promise((resolve, reject) => {
    Auth.onAuthStateChanged(async user => {
      await store.dispatch('user/setUSER', user)
      resolve()
    })
  })
}
