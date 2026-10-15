<template>
  <div>
    <h1>Destinacions</h1>

    <p v-if="loading">Carregant dades...</p>

    <p v-else-if="error">
      Error en carregar les dades.
    </p>

    <p v-else-if="destinacions.length === 0">
      No hi ha destinacions disponibles.
    </p>

    <DestinationCard
      v-for="dest in destinacions"
      :key="dest.id"
      :nom="dest.nom"
      :pais="dest.pais"
      :continent="dest.continent"
      :descripcio="dest.descripcio"
    />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { collection, getDocs } from 'firebase/firestore'
import { db } from '../firebase'
import DestinationCard from '../components/DestinationCard.vue'

const destinacions = ref([])
const loading = ref(true)
const error = ref(false)

onMounted(async () => {
  try {
    const snapshot = await getDocs(collection(db, 'destinacions'))

    destinacions.value = snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }))
  } catch (err) {
    console.error(err)
    error.value = true
  } finally {
    loading.value = false
  }
})
</script>
