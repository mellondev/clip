import { Component, Input, inject } from '@angular/core';
import { Feature } from '../../feature-catalog/feature.model';
import { CatalogService } from '../../feature-catalog/catalog-service';

@Component({
  selector: 'clip-feature-overview',
  templateUrl: './feature-overview.component.html',
  styleUrls: ['./feature-overview.component.scss'],
})
export class FeatureOverviewComponent {
  catalogService = inject(CatalogService);
  feature?: Feature;

  @Input()
  set featureName(name: string) {
    this.feature = this.catalogService.getFeatureByName(name);
  }
}
