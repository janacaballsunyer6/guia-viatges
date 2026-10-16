<template>
  <section class="hero">
    <div class="overlay">
      <h1>Descobreix el món</h1>
      <p>
        Explora destinacions úniques, descobreix noves cultures
        i inspira el teu pròxim viatge.
      </p>

      <RouterLink to="/destinacions" class="btn">
        Explorar destinacions
      </RouterLink>
    </div>
  </section>

  <section class="features">
    <div class="feature">
      <h3>Destinacions seleccionades</h3>
      <p>Consulta llocs destacats d'arreu del món.</p>
    </div>

    <div class="feature">
      <h3>Dades en temps real</h3>
      <p>Informació emmagatzemada i consultada des de Firestore.</p>
    </div>

    <div class="feature">
      <h3>Experiència moderna</h3>
      <p>Navegació ràpida gràcies a Vue Router.</p>
    </div>
  </section>
</template>

<style scoped>
.hero {
  height: 80vh;
  background-image: url("https://images.unsplash.com/photo-1507525428034-b723cf961d3e");
  background-size: cover;
  background-position: center;
  border-radius: 20px;
  overflow: hidden;
}

.overlay {
  height: 100%;
  background: rgba(0,0,0,.5);
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 60px;
}

.overlay h1 {
  font-size: 4rem;
  margin-bottom: 1rem;
}

.overlay p {
  max-width: 600px;
  font-size: 1.2rem;
}

.btn {
  margin-top: 2rem;
  width: fit-content;
  background: white;
  color: black;
  text-decoration: none;
  padding: 1rem 2rem;
  border-radius: 12px;
  font-weight: bold;
}

.features {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
  margin-top: 50px;
}

.feature {
  background: white;
  padding: 2rem;
  border-radius: 20px;
  box-shadow: 0 8px 20px rgba(0,0,0,.08);
}
</style>