import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Feature } from './feature.model';
import { Observable, catchError, map, of, tap } from 'rxjs';
import { setRemoteDefinitions } from '@nx/angular/mf';

@Injectable({
  providedIn: 'root',
})
export class FeatureService {
  featuresUrl = 'assets/features.json';

  private features$: Feature[] = [];

  get features(): Observable<Feature[]> {
    if (this.features$.length === 0) {
      return this.loadFeatures().pipe(
        map((result) => (this.features$ = result))
      );
    }

    return of(this.features$);
  }

  remoteDefinitions: Record<string, string> = {};

  constructor(private http: HttpClient) {}

  private loadFeatures(): Observable<Feature[]> {
    console.log('loadFeatures');
    return this.http.get<Feature[]>(this.featuresUrl).pipe(
      tap((features: Feature[]) => {
        features.forEach((feature) => {
          this.remoteDefinitions[feature.name] = feature.remoteUrl;
        });
        setRemoteDefinitions(this.remoteDefinitions);
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
