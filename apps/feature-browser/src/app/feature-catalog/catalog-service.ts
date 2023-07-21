import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Feature } from './feature.model';
import { Observable, catchError, map, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CatalogService {
  featuresUrl = 'http://localhost:4202/assets/feature-catalog.json';

  private featureList: Feature[] = [];

  get features(): Observable<Feature[]> {
    if (this.featureList.length === 0) {
      return this.loadCatalog().pipe(
        map((result) => (this.featureList = result))
      );
    }

    return of(this.featureList);
  }

  remoteDefinitions: Record<string, string> = {};

  constructor(private http: HttpClient) {}

  getFeatureByName(name: string): Observable<Feature | undefined> {
    return this.features.pipe(
      map((features) => features.find((f) => f.id === name))
    );
  }

  private loadCatalog(): Observable<Feature[]> {
    console.log('loading catalog');
    return this.http.get<Feature[]>(this.featuresUrl).pipe(
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
