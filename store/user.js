import Cookies from 'js-cookie'
import { Auth } from '../plugins/firebase-client-init'

export const state = () => ({
  uid: null,
  user: null
})

export const getters = {
  uid(state) {
    if (state.user && state.user.uid) return state.user.uid
    else return null
  },

  user(state) {
    return state.user
  },

  isAuthenticated(state) {
    return !!state.user && !!state.user.uid
  }
}

export const actions = {
  async signInWithEmail({ commit, dispatch }, { email, password }) {
    return new Promise((resolve, reject) => {
      Auth.signInWithEmailAndPassword(email, password)
        .then(({ user }) => {
          dispatch('setUSER', user)
          resolve()
        })
        .catch(err => reject(err))
    })
  },

  async logout({ commit, dispatch }) {
    await Auth.signOut()

    Cookies.remove('__session')
    commit('setUSER', null)
  },

  async setUSER({ commit, dispatch }, user) {
    const token = await Auth.currentUser.getIdToken(true)
    const userData = {
      name: user.displayName,
      email: user.email,
      uid: user.uid
    }

    Cookies.set('__session', token)
  }
}

export const mutations = {
  setUSER(state, user) {
    state.user = user
  }
}
