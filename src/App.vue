<script setup>
import SiteHeader from './components/SiteHeader.vue'
import SiteFooter from './components/SiteFooter.vue'
</script>

<template>
  <SiteHeader />

  <nav>
    <RouterLink to="/">Inici</RouterLink>
    <RouterLink to="/destinacions">Destinacions</RouterLink>
    <RouterLink to="/sobre">Sobre</RouterLink>
  </nav>

  <main class="container">
    <RouterView />
  </main>

  <SiteFooter />
</template>

<style>
body {
  margin: 0;
  font-family: 'Segoe UI', sans-serif;
  background: #f5f7fa;
}

nav {
  background: #0f4c81;
  padding: 1rem;
  display: flex;
  justify-content: center;
  gap: 2rem;
}

nav a {
  color: white;
  text-decoration: none;
  font-weight: bold;
}

nav a:hover {
  color: #ffd54f;
}

.container {
  max-width: 1200px;
  margin: auto;
  padding: 2rem;
}
</style>