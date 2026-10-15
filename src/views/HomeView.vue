<template>
  <section class="home">
    <h1>Benvingut a la Guia de Viatges</h1>

    <p>
      Explora algunes de les destinacions més interessants del món.
    </p>

    <RouterLink to="/destinacions" class="btn">
      Veure destinacions
    </RouterLink>
  </section>
</template>

<style scoped>
.home {
  text-align: center;
  padding: 3rem;
}

.btn {
  display: inline-block;
  margin-top: 1rem;
  background: #1976d2;
  color: white;
  padding: 1rem 2rem;
  border-radius: 10px;
  text-decoration: none;
}

.btn:hover {
  background: #0d47a1;
}
</style>