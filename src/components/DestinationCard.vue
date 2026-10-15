<template>
  <div class="card">
    <h2>{{ nom }}</h2>

    <p>
      <strong>País:</strong> {{ pais }}
    </p>

    <p>
      <strong>Continent:</strong> {{ continent }}
    </p>

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

<style scoped>
.card {
  background: white;
  border-radius: 15px;
  padding: 1.5rem;
  margin-bottom: 1.5rem;
  box-shadow: 0 4px 12px rgba(0,0,0,.15);
  transition: transform 0.3s;
}

.card:hover {
  transform: translateY(-5px);
}

h2 {
  color: #d21991;
}
</style>