<template>

<section class="hero">

  <div class="left">

    <div class="small">
      GUIA DE VIATGES INTERNACIONAL
    </div>

   <h1>
    EXPLOREM
    <br>
    EL MÓN
  </h1>

    <p>
      Descobreix noves cultures, ciutats sorprenents
      i destinacions seleccionades d'arreu del món.
    </p>

  </div>

<div class="right">
  https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?
  auto=format&fit=crop&w=1200&q=80
</div>

</section>

<section class="cards">

  <div class="card">
    <h3>Destinacions exclusives</h3>
    <p>Selecció de ciutats i llocs únics.</p>
  </div>

  <div class="card">
    <h3>Informació en temps real</h3>
    <p>Dades llegides directament de Firestore.</p>
  </div>

  <div class="card">
    <h3>Experiència moderna</h3>
    <p>Aplicació desenvolupada amb Vue i Firebase.</p>
  </div>

</section>

</template>

<style scoped>

.hero{
  min-height:85vh;
  display:grid;
  grid-template-columns:1fr 600px;
  gap:70px;
  align-items:center;
  padding:40px 0;
}

.small{
  letter-spacing:3px;
  font-size:.8rem;
}

h1{
  font-family:'Bebas Neue';
  font-size:9rem;
  line-height:.85;
  color:#5D8EF0;
  margin:0;
}

p{
  font-size:1.2rem;
  max-width:500px;
}

.right img{
  width:100%;
  height:700px;
  object-fit:cover;
  border-radius:30px;
  display:block;
}

.cards{
  margin:80px 0;
  display:grid;
  grid-template-columns:repeat(3,1fr);
  gap:25px;
}

.card{
  background:white;
  padding:30px;
  border-radius:20px;
}

</style>