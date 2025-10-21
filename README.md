# 🧩 Spalopia Widget

## 1. Propósito del Proyecto

El objetivo de este proyecto es crear un motor de reservas de marca blanca en forma de un widget portable y autónomo.
La idea es que los clientes puedan integrar toda la funcionalidad de una aplicación Nuxt/Vue en su sitio web existente, sin importar la tecnología que usen (WordPress, HTML plano, React, etc.), con un mínimo esfuerzo técnico.

La analogía perfecta es la de un contador de visitas para un blog: un componente de un tercero que se instala fácilmente copiando y pegando unas pocas líneas de código.

## 2. Setup para Desarrolladores

Para trabajar en este proyecto, necesitarás tener instalado lo siguiente:

- **Node.js**: Versión 22.x o superior
- **Gestor de paquetes**: yarn

Una vez clonado el repositorio, instala las dependencias:

```bash
# Instala todas las dependencias del proyecto
yarn install
```

Para iniciar el entorno de desarrollo local, ejecuta:

```bash
# Inicia el servidor de desarrollo en http://localhost:3000
yarn dev
```

## 3. ¿Cómo Funciona?

El proyecto se compone de dos flujos de trabajo distintos: uno para el desarrollo y otro para la construcción (build) del producto final.

### 🔹 Desarrollo (`yarn dev`)

Se utiliza Nuxt para crear un entorno de desarrollo rápido y cómodo que nos permite construir los componentes de Vue con recarga en caliente (Hot Reloading).

### 🔹 Construcción (`yarn generate`)

Se utiliza Vite directamente para compilar y empaquetar toda la aplicación (lógica y estilos) en un único archivo JavaScript (.js).
Este archivo es el widget final que se distribuye a los clientes.

## 4. Estructura y Flujo Detallado

A continuación se detalla el rol de cada pieza clave y cómo interactúan.

### 📁 Archivos Principales

| Archivo | Descripción |
|---------|-------------|
| `src/Widget.vue` | El corazón de la aplicación. Es el componente principal de Vue que contiene toda la interfaz y lógica del motor de reservas. |
| `src/entry.ts` | El "puente" entre el mundo exterior y tu aplicación Vue. Crea la función mountSpalopiaWidget y la expone para ser usada desde la página del cliente. |
| `app.vue` | Un "campo de pruebas" o playground que solo se usa durante el desarrollo local. Permite renderizar Widget.vue para trabajar en él. |
| `package.json` | Define los scripts y dependencias. La distinción clave está en los scripts:<br>• "dev": "nuxt dev" → Inicia el servidor de desarrollo.<br>• "generate": "vite build" → Construye la librería con Vite. |
| `nuxt.config.ts` | Configuración para el entorno de desarrollo con nuxt dev. |
| `vite.config.ts` | Configuración para la creación del widget final con vite build. Clave para el producto de producción. |
| `.github/workflows/deploy.yml` | Define el flujo de CI/CD que automatiza la construcción y el despliegue del widget. |

### ⚙️ Flujo de Desarrollo (`yarn dev`)

1. El desarrollador ejecuta `yarn dev`
2. Nuxt toma el control:
   - Lee nuxt.config.ts
   - Inicia un servidor de desarrollo
   - Usa app.vue como página principal para mostrar Widget.vue
   - Proporciona recarga en caliente (HMR)

**Resultado**: Una experiencia fluida para construir la interfaz del widget de forma aislada.

### 🏗️ Flujo de Construcción (`yarn generate`)

1. El desarrollador (o CI/CD) ejecuta `yarn generate`
2. Vite toma el control (según package.json)
3. Vite lee vite.config.ts y:
   - Usa src/entry.ts como punto de entrada
   - Encuentra Widget.vue y los empaqueta juntos
   - Usa cssInjectedByJsPlugin() para incluir los estilos dentro del JS final
   - Reemplaza process.env.NODE_ENV para evitar errores

**Resultado**: Un único archivo auto-contenido `spalopia-widget.js` en `.output/public`.

### 🚀 Flujo de Despliegue (GitHub Actions)

**Trigger**: Un push a la rama main

**Workflow** (deploy.yml):
1. Descarga el código
2. Configura Node.js y yarn
3. Ejecuta yarn install y luego yarn generate
4. Genera el archivo spalopia-widget.js
5. Usa peaceiris/actions-gh-pages para publicar el contenido de .output/public en la rama gh-pages

**Resultado Final**:
GitHub publica el widget como un sitio estático accesible en:
```
https://<usuario>.github.io/<repositorio>/spalopia-widget.js
```

## 5. ¿Cómo Usar el Widget?

Un cliente final solo necesita seguir estos tres pasos en su página web:

1. **Añadir un contenedor**: Colocar un `<div>` con un id único en el lugar donde aparecerá el widget.
2. **Cargar el script**: Añadir una etiqueta `<script>` que apunte a la URL del widget publicado.
3. **Inicializar el widget**: Llamar a la función mountSpalopiaWidget.

### 🧱 Ejemplo completo

[Ejemplo en codepen:](https://codepen.io/luisafvaca/pen/raxJZdx)

```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8" />
  <title>Mi Sitio Web</title>
</head>
<body>

  <h1>Bienvenido a mi hotel</h1>

  <!-- 1. Contenedor para el widget -->
  <div id="booking-engine"></div>

  <!-- 2. Carga del script del widget -->
  <script src="https://luisafvaca.github.io/test-widget/spalopia-widget.js"></script>

  <!-- 3. Inicialización -->
  <script>
    document.addEventListener('DOMContentLoaded', function() {
      if (window.SpalopiaWidget) {
        window.SpalopiaWidget.mountSpalopiaWidget({
          targetId: 'booking-engine',
          clientId: 'CLIENTE-ID-SECRETO-12345'
        });
      } else {
        console.error('El script del widget no se cargó correctamente.');
      }
    });
  </script>

</body>
</html>
```