<template>

<div class="destination">

  <img
    :src="imatge"
    :alt="nom"
  >

  <div class="content">

    <span>{{ continent }}</span>

    <h2>{{ nom }}</h2>

    <h3>{{ pais }}</h3>

    <p>
      {{ descripcio }}
    </p>

  </div>

</div>

</template>

<script setup>
defineProps({
  nom:String,
  pais:String,
  continent:String,
  descripcio:String,
  imatge:String
})
</script>

<style scoped>

.destination{
  background:white;
  border-radius:25px;
  overflow:hidden;
  margin-bottom:40px;
  box-shadow:0 15px 30px rgba(0,0,0,.08);
}

img{
  width:100%;
  height:350px;
  object-fit:cover;
}

.content{
  padding:30px;
}

span{
  color:#5D8EF0;
  font-weight:700;
}

h2{
  font-family:'Bebas Neue';
  font-size:4rem;
  margin:10px 0;
}

h3{
  margin-top:0;
}

p{
  line-height:1.8;
}

</style>