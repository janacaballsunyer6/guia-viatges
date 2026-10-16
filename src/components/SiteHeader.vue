<template>
  <header class="header">

    <div class="left">
      <RouterLink to="/">INICI</RouterLink>
      <RouterLink to="/destinacions">DESTINACIONS</RouterLink>
      <RouterLink to="/sobre">SOBRE</RouterLink>
    </div>

    <div class="center">
      GUIA DE VIATGES
    </div>

    <div class="right">
      <RouterLink class="btn" to="/destinacions">
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
  padding:30px 0;
}

.left{
  display:flex;
  gap:40px;
}

.center{
  text-align:center;
  font-family:'Bebas Neue';
  font-size:3rem;
  letter-spacing:3px;
}

.right{
  display:flex;
  justify-content:flex-end;
}

a{
  text-decoration:none;
  color:#111;
  font-weight:600;
}

.btn{
  background:#5D8EF0;
  color:white;
  padding:14px 30px;
  border-radius:999px;
}

</style>