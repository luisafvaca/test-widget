<template>
  <div v-if="clientId" class="spalopia-widget-container">
    <h1>¡Hola desde el Widget!</h1>
    <p>Tu ID de Cliente es: <strong>{{ clientId }}</strong></p>
  </div>
  <div v-else class="spalopia-widget-error">
    <p>Error: No se ha proporcionado un clientId.</p>
  </div>
</template>

<script setup>
defineProps({
  clientId: String
});
</script>

<style scoped>
.spalopia-widget-container {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
  border: 2px solid #00dc82;
  border-radius: 12px;
  padding: 2rem;
  text-align: center;
  background-color: #f0fdf4;
  color: #166534;
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
