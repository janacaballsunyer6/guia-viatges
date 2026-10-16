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
  font-family: 'Inter', 'Segoe UI', sans-serif;
  background: #f8fafc;
}

nav {
  background: white;
  padding: 1rem;
  display: flex;
  justify-content: center;
  gap: 2rem;
  box-shadow: 0 2px 10px rgba(0,0,0,.08);
  position: sticky;
  top: 0;
}

nav a {
  text-decoration: none;
  color: #334155;
  font-weight: 600;
}

nav a:hover {
  color: #2563eb;
}

.container {
  max-width: 1200px;
  margin: auto;
  padding: 3rem 2rem;
}
</style>