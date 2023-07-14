import { Feature } from '@clip/core';
import { setRemoteDefinitions } from '@nx/angular/mf';

fetch('/assets/features.json')
  .then((res) => res.json())
  .then((features: Feature[]) => {
    const remoteDefinitions: Record<string, string> = {};
    features.forEach((f: Feature) => (remoteDefinitions[f.name] = f.remoteUrl));
    return remoteDefinitions;
  })
  .then((definitions) => setRemoteDefinitions(definitions))
  .then(() => import('./bootstrap').catch((err) => console.error(err)));
