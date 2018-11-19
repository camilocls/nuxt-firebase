<template>
  <section class="container">
    <div>
      <logo/>
      <h2 class="subtitle">
        Auth with firebase
      </h2>
    </div>
    <div class="links">
      <nuxt-link to="/dashboard">Dashboard</nuxt-link>
      <nuxt-link to="/login">Login</nuxt-link>
    </div>
  </section>
</template>

<script>
import Logo from '~/components/Logo.vue'

export default {
  components: {
    Logo
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
.links {
  padding-top: 20px;
}
</style>
