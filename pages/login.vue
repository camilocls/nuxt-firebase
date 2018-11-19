<template>
  <section class="container">
    <h1 class="title is-size-2">
      Login Page
    </h1>
    <LoginForm />
  </section>
</template>

<script>
import LoginForm from '~/components/LoginForm.vue'

export default {
  middleware: 'router-auth',
  components: {
    LoginForm
  }
}
</script>

<style>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  flex-direction: column;
}
</style>
