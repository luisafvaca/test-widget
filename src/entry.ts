import { createApp } from 'vue'
import Widget from './Widget.vue'

/**
 * Monta el widget de Spalopia en un elemento del DOM.
 * @param options - Opciones para montar el widget.
 * @param options.targetId - El ID del elemento HTML donde se montará el widget.
 * @param options.clientId - El ID del cliente para pasar al widget.
 */
function mountSpalopiaWidget(options: { targetId: string; clientId: string; }) {
  const finalOptions = {
    targetId: options.targetId || 'spalopia-widget',
    clientId: options.clientId || ''
  };

  const target = document.getElementById(finalOptions.targetId);
  if (!target) {
    console.error(`[Spalopia Widget] No se encontró el elemento con id "${finalOptions.targetId}".`);
    return;
  }

  // Crea la aplicación Vue con el componente Widget y le pasa las props
  const app = createApp(Widget, { clientId: finalOptions.clientId });
  
  // Monta la aplicación en el elemento de destino
  app.mount(target);
}

// Exporta la función para que esté disponible en el objeto global de la librería (SpalopiaWidget)
export { mountSpalopiaWidget };

