import { createApp } from 'vue'
import Widget from './Widget.vue'

declare global {
  interface Window {
    mountSpalopiaWidget: (options: { targetId: string; clientId: string; }) => void;
  }
}

function mountSpalopiaWidget(options: { targetId: string; clientId: string; withFooter: boolean; }) {
  const finalOptions = {
    targetId: options.targetId || 'spalopia-widget',
    clientId: options.clientId || ''
  };

  const target = document.getElementById(finalOptions.targetId);
  if (!target) {
    console.error(`[Spalopia Widget] No se encontró el elemento con id "${finalOptions.targetId}".`);
    return;
  }

  const app = createApp(Widget, { clientId: finalOptions.clientId, withFooter: options.withFooter });
  
  app.mount(target);
}

window.mountSpalopiaWidget = mountSpalopiaWidget;

