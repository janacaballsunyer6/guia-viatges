<script setup>
import SiteHeader from './components/SiteHeader.vue'
import SiteFooter from './components/SiteFooter.vue'
</script>

<template>
  <SiteHeader />

  <main class="container">
    <RouterView />
  </main>

  <SiteFooter />
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Inter:wght@300;400;500;600;700&display=swap');

:root{
  --background:#F5F3E8;
  --blue:#5D8EF0;
  --dark:#121212;
}

body{
  margin:0;
  background:var(--background);
  font-family:'Inter',sans-serif;
  color:var(--dark);
}

*{
  box-sizing:border-box;
}

.container{
  width:min(1400px,90%);
  margin:auto;
}
</style>
