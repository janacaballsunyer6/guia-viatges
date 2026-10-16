<template>
  <div class="home">
    <h1>Explora el món 🌍</h1>

    <p>
      Descobreix destinacions increïbles,
      cultures úniques i experiències inoblidables.
    </p>

    <RouterLink to="/destinacions" class="btn">
      Veure destinacions
    </RouterLink>
  </div>
</template>

<style scoped>
.home {
  text-align: center;
  padding: 4rem 2rem;
}

.home h1 {
  font-size: 3rem;
}

.home p {
  color: #64748b;
  max-width: 700px;
  margin: 1rem auto;
}

.btn {
  display: inline-block;
  margin-top: 2rem;
  background: #2563eb;
  color: white;
  text-decoration: none;
  padding: 1rem 2rem;
  border-radius: 12px;
  font-weight: 600;
}

.btn:hover {
  background: #1d4ed8;
}
</style>