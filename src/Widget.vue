<template>
  <div>
    <div v-if="clientId" class="spalopia-widget-container">
      <Navbar />
      <section>
        <h1>¡Hola desde el Widget!</h1>
        <p>Tu ID de Cliente es: <strong>{{ clientId }}</strong></p>
        <p>Listado de resultados</p>
      </section>
      <div v-if="withFooter">
        <Footer />
      </div>
    </div>
    <div v-else class="spalopia-widget-error">
      <p>Error: No se ha proporcionado un clientId.</p>
    </div>
  </div>
</template>

<script setup>
import Navbar from './components/Navbar.vue';
import Footer from './components/Footer.vue';

defineProps({
  clientId: String,
  withFooter: Boolean
});
</script>

<style scoped>
.spalopia-widget-container {
  font-family: Roboto, Helvetica, Arial, sans-serif;
  text-align: center;
  border: 1px solid grey;
  border-radius: 4px;
  box-shadow: 0 2px 6px lightgrey;
}

.spalopia-widget-error {
  font-family: sans-serif;
  border: 2px solid #ef4444;
  border-radius: 12px;
  padding: 2rem;
  text-align: center;
  background-color: #fee2e2;
  color: #991b1b;
}
</style>
