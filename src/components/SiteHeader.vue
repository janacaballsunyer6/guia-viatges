<template>
  <header>
    <nav>

      <div class="links">
        <RouterLink to="/">INICI</RouterLink>
        <RouterLink to="/destinacions">DESTINACIONS</RouterLink>
        <RouterLink to="/sobre">SOBRE</RouterLink>
      </div>

      <div class="logo">
        GUIA DE VIATGES
      </div>

      <a
        href="/destinacions"
        class="btn"
      >
        EXPLORAR
      </a>

    </nav>
  </header>
</template>

<style scoped>

header{
  padding:25px 0;
}

nav{
  display:flex;
  justify-content:space-between;
  align-items:center;
}

.links{
  display:flex;
  gap:30px;
}

a{
  text-decoration:none;
  color:#222;
  font-size:.9rem;
  font-weight:600;
}

.logo{
  font-family:'Bebas Neue';
  font-size:2rem;
  letter-spacing:2px;
}

.btn{
  background:#5D8EF0;
  color:white;
  padding:12px 25px;
  border-radius:100px;
}

</style>