<script setup>
import SiteHeader from './components/SiteHeader.vue'
import SiteFooter from './components/SiteFooter.vue'
</script>

<template>
  <SiteHeader />

  <nav>
    <RouterLink to="/">Inici</RouterLink> |
    <RouterLink to="/destinacions">Destinacions</RouterLink> |
    <RouterLink to="/sobre">Sobre</RouterLink>
  </nav>

  <RouterView />

  <SiteFooter />
</template>