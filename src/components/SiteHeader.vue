<template>
  <header class="header">

    <div class="menu">
      <RouterLink to="/">INICI</RouterLink>
      <RouterLink to="/destinacions">DESTINACIONS</RouterLink>
      <RouterLink to="/sobre">SOBRE</RouterLink>
    </div>

    <div class="logo">
      GUIA DE VIATGES
    </div>

    <div class="actions">
      <RouterLink to="/destinacions" class="button">
        EXPLORAR
      </RouterLink>
    </div>

  </header>
</template>

<style scoped>

.header{
  width:100%;

  display:grid;
  grid-template-columns:1fr auto 1fr;

  align-items:center;

  padding:30px 40px;

  background:white;

  border-radius:24px;

  margin-bottom:40px;

  box-shadow:0 8px 30px rgba(0,0,0,.06);
}

.menu{
  display:flex;
  gap:35px;
}

.menu a{
  font-size:.95rem;
}

.logo{
  text-align:center;

  font-family:'Bebas Neue', sans-serif;

  font-size:3rem;

  letter-spacing:3px;

  white-space:nowrap;
}

.actions{
  display:flex;
  justify-content:flex-end;
}

a{
  text-decoration:none;
  color:#151515;
  font-weight:600;

  transition:.3s;
}

a:hover{
  color:#5D8EF0;
}

.button{
  background:#5D8EF0;
  color:white !important;

  padding:14px 30px;

  border-radius:999px;

  box-shadow:0 6px 18px rgba(93,142,240,.35);
}

.button:hover{
  transform:translateY(-2px);
}

@media(max-width:1000px){

  .header{
    grid-template-columns:1fr;
    gap:20px;

    text-align:center;
  }

  .menu{
    justify-content:center;
    flex-wrap:wrap;
  }

  .actions{
    justify-content:center;
  }

}

</style>