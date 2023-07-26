import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { Feature } from './feature.model';
import { Feature as FeatureCore, FeatureService } from '@clip/core';
import {
  BehaviorSubject,
  Observable,
  catchError,
  combineLatest,
  map,
  of,
  tap,
} from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CatalogService {
  featuresUrl = 'http://localhost:4202/assets/feature-catalog.json';

  private featureService = inject(FeatureService);

  private _features = new BehaviorSubject<Feature[]>([]);
  features$ = this._features.asObservable();

  private _installedFeatures = new BehaviorSubject<Feature[]>([]);
  installedFeatures$ = this._installedFeatures.asObservable();

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

  installFeature(feature: Feature): boolean {
    const installFeature: FeatureCore = {
      name: feature.id,
      title: feature.name,
      description: feature.description,
      route: feature.routing,
      remoteUrl: feature.remoteUrl,
      dashboardWidgets: feature.components
        .filter((c) => c.type === 'Dashboard Widget')
        .map((c) => {
          return {
            name: c.id,
            description: c.description,
            title: c.name,
            module: c.module,
            componentName: c.componentName,
          };
        }),
    } as FeatureCore;

    return this.featureService.installFeature(installFeature);
  }

  removeFeature(featureId: string): boolean {
    return this.featureService.removeFeature(featureId);
  }

  private loadCatalog() {
    console.log('loading catalog');
    const catalogFeatures$ = this.http
      .get<Feature[]>(this.featuresUrl)
      .pipe(catchError(this.handleError<Feature[]>('getFeatures', [])));

    combineLatest([catalogFeatures$, this.featureService.features$])
      .pipe(
        tap(([features, installedFeatures]) => {
          console.log('installed features', installedFeatures);
          console.log('all features', features);
        }),
        takeUntilDestroyed()
      )
      .subscribe(([features, installedFeatures]) => {
        this._features.next(features);
        this._installedFeatures.next(
          features.filter(
            (f) =>
              installedFeatures.find((installed) => installed.name === f.id) !==
              undefined
          )
        );
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
