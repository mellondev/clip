import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Feature } from './feature.model';
import { BehaviorSubject, Observable, catchError, of, tap } from 'rxjs';
import { setRemoteDefinitions } from '@nx/angular/mf';

@Injectable({
  providedIn: 'root',
})
export class FeatureService {
  featuresUrl = 'assets/features.json';

  private _features = new BehaviorSubject<Feature[]>([]);
  features$ = this._features.asObservable();

  remoteDefinitions: Record<string, string> = {};

  constructor(private http: HttpClient) {
    this.loadFeatures();
  }

  installFeature(feature: Feature): boolean {
    const features = this._features.value;
    if (!features.find((f) => f.name === feature.name)) {
      features.push(feature);
      this.remoteDefinitions[feature.name] = feature.remoteUrl;
      setRemoteDefinitions(this.remoteDefinitions);
      this._features.next(features);
      return true;
    }

    console.info(`Feature ${feature.name} already installed`);
    return false;
    
  }

  removeFeature(featureName: string): boolean {
    const features = this._features.value;
    const index = features.findIndex((f) => f.name === featureName);
    if (index > -1) {
      features.splice(index, 1);
      delete this.remoteDefinitions[featureName];
      setRemoteDefinitions(this.remoteDefinitions);
      this._features.next(features);

      console.info(`Feature ${featureName} removed`);
      return true;
    }

    console.error(`Feature ${featureName} not found`);
    return false;
  }

  loadFeatures(): Observable<Feature[]> {
    console.log('loading features');
    return this.http
      .get<Feature[]>(this.featuresUrl)
      .pipe(
        tap((features: Feature[]) => {
          features.forEach((feature) => {
            this.remoteDefinitions[feature.name] = feature.remoteUrl;
          });
          setRemoteDefinitions(this.remoteDefinitions);
          this._features.next(features);
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
