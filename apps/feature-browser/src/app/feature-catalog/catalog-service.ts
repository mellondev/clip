import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Feature } from './feature.model';
import { BehaviorSubject, Observable, catchError, filter, map, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CatalogService {
  featuresUrl = 'http://localhost:4202/assets/feature-catalog.json';

  private _features = new BehaviorSubject<Feature[]>([]);

  features$ = this._features.asObservable();

  constructor(private http: HttpClient) {
    this.loadCatalog();
  }

  getFeatureByName(name: string): Observable<Feature | undefined> {
    return this.features$.pipe(
      map((features) => features.find((f) => f.id === name))
    );
  }

  getFeaturesByTag(tag: string): Observable<Feature[]> {
    console.log(`getting features for tag: ${tag}`);
    return this.features$.pipe(
      map((features) => features.filter((f) => f.tags.includes(tag)))
    );
  }

  private loadCatalog() {
    console.log('loading catalog');
    this.http
      .get<Feature[]>(this.featuresUrl)
      .pipe(catchError(this.handleError<Feature[]>('getFeatures', [])))
      .subscribe((features) => {
        this._features.next(features);
      });
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
