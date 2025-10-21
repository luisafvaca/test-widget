import { createApp } from 'vue'
import Widget from './Widget.vue'

declare global {
  interface Window {
    mountSpalopiaWidget: (options: { targetId: string; clientId: string; }) => void;
  }
}

window.mountSpalopiaWidget = (options = { targetId: 'spalopia-widget', clientId: '' }) => {
  const target = document.getElementById(options.targetId);
  if (!target) {
    console.error(`[Spalopia Widget] No se encontró el elemento con id "${options.targetId}".`);
    return;
  }
  const app = createApp(Widget, { clientId: options.clientId });
  app.mount(target);
};

