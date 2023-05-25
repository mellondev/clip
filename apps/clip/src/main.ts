import { setRemoteDefinitions } from '@nx/angular/mf';

setRemoteDefinitions({});
import('./bootstrap').catch((err) => console.error(err))

// fetch('/assets/module-federation.manifest.json')
//   .then((res) => res.json())
//   .then((definitions) => setRemoteDefinitions(definitions))
//   .then(() => import('./bootstrap').catch((err) => console.error(err)));
