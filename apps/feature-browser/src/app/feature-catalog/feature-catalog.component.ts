import { Component, inject } from '@angular/core';

import { Observable, map } from 'rxjs';

import { CatalogService } from './catalog-service';
import { Feature } from './feature.model';

@Component({
  selector: 'clip-feature-catalog',
  templateUrl: './feature-catalog.component.html',
  styleUrls: ['./feature-catalog.component.scss'],
})
export class FeatureCatalogComponent {
  private catalogService = inject(CatalogService);
  allFeatures$ = this.catalogService.features$;
  installedFeatures$ = this.catalogService.installedFeatures$;
  
  featured$: Observable<Feature[]>;


  
  constructor() {
    this.featured$ = this.catalogService.features$.pipe(map((features) => features.filter((f) => f.featured)));
  }
}
