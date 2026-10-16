<template>
  <section class="hero">

    <div class="left">

      <p class="subtitle">
        GUIA DE VIATGES INTERNACIONAL
      </p>

      <h1>
        DESCOBREIX
        <br>
        EL MÓN
      </h1>

      <p class="description">
        Descobreix noves cultures, ciutats increïbles i experiències úniques
        a través d'una selecció de destinacions destacades.
      </p>

      <RouterLink
        to="/destinacions"
        class="hero-button"
      >
        VEURE DESTINACIONS
      </RouterLink>

    </div>

    <div class="right">
  <img
    src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1400&q=80"
    alt="Paisatge"
    >
  </div>

  </section>
</template>

<style scoped>

.hero{
  min-height:85vh;

  display:grid;
  grid-template-columns:1fr 650px;

  gap:60px;

  align-items:center;
}

.left{
  display:flex;
  flex-direction:column;
}

.subtitle{
  letter-spacing:4px;
  font-size:0.9rem;
  margin-bottom:20px;
}

h1{
  font-family:'Bebas Neue', sans-serif;
  font-size:11rem;
  line-height:0.85;
  margin:0;
  color:#5D8EF0;
}

.description{
  max-width:550px;
  font-size:1.15rem;
  line-height:1.8;
  margin:30px 0;
}

.hero-button{
  width:fit-content;

  padding:16px 32px;

  border-radius:999px;

  background:#5D8EF0;

  color:white;

  text-decoration:none;

  font-weight:700;
}

.right img{
  width:100%;
  height:700px;

  object-fit:cover;

  border-radius:30px;

  display:block;
}

.features{
  margin:100px 0;

  display:grid;
  grid-template-columns:repeat(3,1fr);

  gap:30px;
}

.feature-card{
  background:white;

  padding:35px;

  border-radius:24px;

  box-shadow:0 10px 25px rgba(0,0,0,.08);
}

.feature-card h3{
  margin-top:0;
}

@media (max-width:1000px){

  .hero{
    grid-template-columns:1fr;
  }

  h1{
    font-size:7rem;
  }

  .features{
    grid-template-columns:1fr;
  }

}

</style>