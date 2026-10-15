<template>
  <div>
    <h3>{{ nom }}</h3>
    <p><strong>País:</strong> {{ pais }}</p>
    <p><strong>Continent:</strong> {{ continent }}</p>
    <p>{{ descripcio }}</p>
  </div>
</template>

<script setup>
defineProps({
  nom: String,
  pais: String,
  continent: String,
  descripcio: String
})
</script>