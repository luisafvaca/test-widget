import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  // Desactivamos el Server-Side Rendering ya que es un widget para el cliente.
  ssr: false,
  typescript: {
    strict: true
  },
  devtools: { enabled: true }
})

