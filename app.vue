<template>
  <div style="padding: 2rem;">
    <h1>Entorno de Desarrollo del Widget</h1>
    <p>Así se verá tu widget con un ID de prueba:</p>
    <hr style="margin: 1rem 0;">
    <Widget client-id="cliente-de-prueba-123" />
  </div>
</template>

<script setup>
import Widget from './src/Widget.ts'
</script>

