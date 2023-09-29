import { HttpClient } from '@angular/common/http';
import { Injectable, inject, signal } from '@angular/core';

import { Observable, catchError, of, tap } from 'rxjs';
import { setRemoteDefinitions } from '@nx/angular/mf';

import { Feature } from './feature.model';

@Injectable({
  providedIn: 'root',
})
export class FeatureService {
  private http = inject(HttpClient);
  
  featuresUrl = 'assets/features.json';
  remoteDefinitions: Record<string, string> = {};
  features = signal<Feature[]>([]);

  installFeature(feature: Feature): boolean {
    if (!this.features().find((f) => f.name === feature.name)) {
      this.remoteDefinitions[feature.name] = feature.remoteUrl;
      setRemoteDefinitions(this.remoteDefinitions);
      this.features.set([...this.features(), feature]);
      return true;
    }

    console.info(`Feature ${feature.name} already installed`);
    return false;
  }

  removeFeature(featureName: string): boolean {
    const feature = this.features().find((f) => f.name === featureName);
    if (feature) {
      delete this.remoteDefinitions[featureName];
      setRemoteDefinitions(this.remoteDefinitions);
      this.features.set(this.features().filter((f) => f.name !== featureName));

      console.info(`Feature ${featureName} removed`);
      return true;
    }

    console.error(`Feature ${featureName} not found`);
    return false;
  }

  isFeatureInstalled(featureName: string): boolean {
    return this.features().find((f) => f.name === featureName) !== undefined;
  }

  loadFeatures(): Observable<Feature[]> {
    console.log('loading features');
    return this.http.get<Feature[]>(this.featuresUrl).pipe(
      tap((features: Feature[]) => {
        features.forEach((feature) => {
          this.remoteDefinitions[feature.name] = feature.remoteUrl;
        });
        setRemoteDefinitions(this.remoteDefinitions);
        this.features.set(features);
      }),
      catchError(this.handleError<Feature[]>('getFeatures', []))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: unknown): Observable<T> => {
      console.error(operation);
      console.error(error); // log to console instead

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
