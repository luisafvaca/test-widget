import { createApp } from 'vue'
import Widget from './Widget.vue'

// Declara la función en el scope global de la ventana
declare global {
  interface Window {
    mountSpalopiaWidget: (options: { targetId: string; clientId: string; }) => void;
  }
}

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

// ¡CAMBIO CLAVE! Asigna la función directamente al objeto window.
// Esto es más robusto para entornos como CodePen.
window.mountSpalopiaWidget = mountSpalopiaWidget;

