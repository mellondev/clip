import { Component, computed, inject } from '@angular/core';
import { CatalogService } from './catalog-service';

@Component({
  selector: 'clip-feature-catalog',
  templateUrl: './feature-catalog.component.html',
  styleUrls: ['./feature-catalog.component.scss'],
})
export class FeatureCatalogComponent {
  private catalogService = inject(CatalogService);
  
  allFeatures = this.catalogService.featureCatalog;
  installedFeatures = computed(() => this.allFeatures().filter((f) => f.installed));
  featured = computed(() => this.allFeatures().filter((f) => f.featured));
}
