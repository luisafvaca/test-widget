import { createApp } from 'vue'
import Widget from './Widget.vue'

declare global {
  interface Window {
    mountSpalopiaWidget: (options: { targetId: string; clientId: string; }) => void;
  }
}

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

  const app = createApp(Widget, { clientId: finalOptions.clientId });
  
  app.mount(target);
}

window.mountSpalopiaWidget = mountSpalopiaWidget;

