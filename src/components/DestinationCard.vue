<template>
  <div class="card">

    <img
      :src="imatge"
      :alt="nom"
    >

    <div class="content">
      <span>{{ continent }}</span>

      <h2>{{ nom }}</h2>

      <h4>{{ pais }}</h4>

      <p>{{ descripcio }}</p>
    </div>

  </div>
</template>

<script setup>
defineProps({
  nom: String,
  pais: String,
  continent: String,
  descripcio: String,
  imatge: String
})
</script>

<style scoped>
.card {
  background: white;
  border-radius: 24px;
  overflow: hidden;
  box-shadow: 0 8px 25px rgba(0,0,0,.08);
  transition: .3s;
}

.card:hover {
  transform: translateY(-8px);
}

img {
  width: 100%;
  height: 220px;
  object-fit: cover;
}

.content {
  padding: 1.5rem;
}

span {
  color: #2563eb;
  font-weight: bold;
}

h2 {
  margin: .5rem 0;
}

h4 {
  color: #666;
}

p {
  line-height: 1.6;
}
</style>