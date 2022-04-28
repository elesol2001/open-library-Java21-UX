<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
<h1>Hi</h1>
<h1>Greetings</h1>
<h1>Hello</h1>
  <header>
    <div class="wrapper">

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style>

</style>
