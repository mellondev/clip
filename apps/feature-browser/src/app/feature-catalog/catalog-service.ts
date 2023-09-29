import { HttpClient } from '@angular/common/http';
import { Injectable, computed, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { Feature } from './feature.model';
import { Feature as FeatureCore, FeatureService } from '@clip/core';
import { Observable, catchError, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CatalogService {
  featuresUrl =
    'https://clipfeaturebrowser.z33.web.core.windows.net/assets/feature-catalog.json';

  private http = inject(HttpClient);
  private featureService = inject(FeatureService);
  private catalogFeatures$ = this.http
    .get<Feature[]>(this.featuresUrl)
    .pipe(catchError(this.handleError<Feature[]>('getFeatures', [])));

  private catalogFeatures = toSignal(this.catalogFeatures$, {
    initialValue: [] as Feature[],
  });

  featureCatalog = computed(() =>
    this.catalogFeatures().map((f) => {
      return {
        ...f,
        installed: this.featureService.isFeatureInstalled(f.id),
      };
    })
  );

  getFeatureByName(name: string): Feature | undefined {
    return this.featureCatalog().find((f) => f.id === name);
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

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: unknown): Observable<T> => {
      console.error(operation);
      console.error(error);
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
