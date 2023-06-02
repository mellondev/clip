import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Feature } from './feature';
import { BehaviorSubject, Observable, catchError, of } from 'rxjs';
import { setRemoteDefinitions } from '@nx/angular/mf';

@Injectable({
  providedIn: 'root',
})
export class FeatureService {
  featuresUrl = 'assets/features.json';

  private readonly features$: BehaviorSubject<Feature[]> = new BehaviorSubject<
    Feature[]
  >([]);

  get features(): Observable<Feature[]> {
    return this.features$.asObservable();
  }

  remoteDefinitions: Record<string, string> = {};

  constructor(private http: HttpClient) {}

  loadFeatures() {
    this.http
      .get<Feature[]>(this.featuresUrl)
      .pipe(catchError(this.handleError<Feature[]>('getFeatures', [])))
      .subscribe((features) => this.features$.next(features));
  }

  loadFeature(featureName: string) {
    const featureToLoad = this.features$.getValue().find(x => x.name === featureName);

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
