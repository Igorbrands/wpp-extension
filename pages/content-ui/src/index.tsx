import App from '@src/app';
import { createRoot } from 'react-dom/client';
// eslint-disable-next-line
// @ts-ignore
import { GoogleOAuthProvider } from '@react-oauth/google';
import tailwindcssOutput from '@src/tailwind-output.css?inline';

const root = document.createElement('div');
const CLIENT_ID = "71195438593-76djr499libetn4c2qi5gh5hcbfdipic.apps.googleusercontent.com";

root.id = 'chrome-extension-boilerplate-react-vite-content-view-root';

document.body.append(root);

const rootIntoShadow = document.createElement('div');
rootIntoShadow.id = 'shadow-root';

const shadowRoot = root.attachShadow({ mode: 'open' });
shadowRoot.appendChild(rootIntoShadow);

/** Inject styles into shadow dom */
const styleElement = document.createElement('style');
styleElement.innerHTML = tailwindcssOutput;
shadowRoot.appendChild(styleElement);

createRoot(rootIntoShadow).render(<GoogleOAuthProvider clientId={CLIENT_ID}>
	<App />
  </GoogleOAuthProvider>);
