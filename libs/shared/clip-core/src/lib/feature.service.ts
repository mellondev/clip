import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Feature } from './feature';
import { Observable, catchError, map, of } from 'rxjs';
import { setRemoteDefinitions } from '@nx/angular/mf';

@Injectable({
  providedIn: 'root',
})
export class FeatureService {
  featuresUrl = 'assets/features.json';

  private features$: Feature[] = [];

  get features(): Observable<Feature[]> {
    if (this.features$.length === 0) {
      return this.loadFeatures().pipe(map(result => this.features$ = result));
    }

    return of(this.features$);
  }

  remoteDefinitions: Record<string, string> = {};

  constructor(private http: HttpClient) {}

  private loadFeatures(): Observable<Feature[]> {
    console.log('loadFeatures');
    return this.http
      .get<Feature[]>(this.featuresUrl)
      .pipe(catchError(this.handleError<Feature[]>('getFeatures', [])));
  }

  loadFeature(featureName: string) {
    const featureToLoad = this.features$.find(x => x.name === featureName);

    if (featureToLoad) {
      this.remoteDefinitions[featureToLoad.name] = featureToLoad.remoteUrl;
      console.log(this.remoteDefinitions);
      setRemoteDefinitions(this.remoteDefinitions);
    }
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   *
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: unknown): Observable<T> => {
      console.error(operation);
      console.error(error); // log to console instead

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
