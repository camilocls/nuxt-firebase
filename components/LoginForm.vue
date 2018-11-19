<template>
  <form @submit.prevent="emailLogin">
    <div class="field">
      <label class="label">Email: </label>
      <input
        v-model="email"
        type="text"
        class="input">
    </div>
    <div class="field">
      <label class="label">Password: </label>
      <input
        v-model="password"
        type="password"
        class="input">
    </div>
    <input
      type="submit"
      class="button"
      value="button">
    <div
      v-if="errorMessage"
      class="notification is-danger">errorMessage: {{ errorMessage }}
    </div>
  </form>
</template>

<script>
export default {
  name: 'LoginForm',
  data() {
    return {
      email: '',
      password: '',
      errorMessage: ''
    }
  },
  methods: {
    emailLogin() {
      if (!this.email || !this.password) {
        this.errorMessage = 'Invalid email or password!'
        return
      }

      this.$store
        .dispatch('user/signInWithEmail', {
          email: this.email,
          password: this.password
        })
        .then(() => {
          if (process.client) {
            window.location.reload()
            // this.$router.push('/dashboard')
          }
        })
        .catch(e => {
          this.errorMessage = e.message
        })
    }
  }
}
</script>
