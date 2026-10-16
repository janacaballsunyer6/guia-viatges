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
  background: #f8fafc;
  font-family: Inter, sans-serif;
}

nav {
  background: white;
  padding: 1rem;
  display: flex;
  justify-content: center;
  gap: 2rem;
  box-shadow: 0 2px 10px rgba(0,0,0,.08);
}

nav a {
  text-decoration: none;
  color: #334155;
  font-weight: 600;
}

.container {
  max-width: 1300px;
  padding: 2rem;
  margin: auto;
}
</style>