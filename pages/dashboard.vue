<template>
  <section class="container">
    <div class="header">
      <h2 class="subtitle">
        Welcome to the dashboard
      </h2>
    </div>
    <div class="content">
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam aut facere tempora dolores minima fuga voluptas! Eaque fugiat dolores quae, vitae odit quis illum nihil recusandae velit ullam amet repellendus.</p>
    </div>
    <nuxt-link to="/">Back to Home</nuxt-link>
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
