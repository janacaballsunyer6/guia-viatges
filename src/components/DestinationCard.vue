<template>
  <div class="card">
    <div class="badge">{{ continent }}</div>

    <h2>{{ nom }}</h2>

    <p><strong>🌍 País:</strong> {{ pais }}</p>

    <p class="desc">
      {{ descripcio }}
    </p>
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
  border-radius: 20px;
  padding: 2rem;
  margin-bottom: 2rem;
  box-shadow: 0 5px 20px rgba(0,0,0,.08);
  transition: all .3s ease;
}

.card:hover {
  transform: translateY(-8px);
}

.badge {
  background: #dbeafe;
  color: #1d4ed8;
  display: inline-block;
  padding: .4rem .8rem;
  border-radius: 30px;
  font-size: .8rem;
  margin-bottom: 1rem;
}

h2 {
  margin: 0;
  color: #0f172a;
}

.desc {
  color: #64748b;
  line-height: 1.6;
}
</style>