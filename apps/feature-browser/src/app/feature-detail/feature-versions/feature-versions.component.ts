import { Component, Input, inject } from '@angular/core';
import { Feature } from '../../feature-catalog/feature.model';
import { CatalogService } from '../../feature-catalog/catalog-service';

@Component({
  selector: 'clip-feature-versions',
  templateUrl: './feature-versions.component.html',
  styleUrls: ['./feature-versions.component.scss'],
})
export class FeatureVersionsComponent {
  catalogService = inject(CatalogService);
  feature?: Feature;

  @Input()
  set featureName(name: string) {
    this.feature = this.catalogService.getFeatureByName(name);
  }
}
