// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // Desactivamos el Server-Side Rendering ya que es un widget para el cliente.
  ssr: false,
  // Habilitamos el modo estricto de TypeScript para mayor seguridad de tipos.
  typescript: {
    strict: true
  },
  devtools: { enabled: true }
})

