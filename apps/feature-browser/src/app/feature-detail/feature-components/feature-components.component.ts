import { Component, Input, inject } from '@angular/core';
import { Feature } from '../../feature-catalog/feature.model';
import { CatalogService } from '../../feature-catalog/catalog-service';

@Component({
  selector: 'clip-feature-components',
  templateUrl: './feature-components.component.html',
  styleUrls: ['./feature-components.component.scss'],
})
export class FeatureComponentsComponent {
  catalogService = inject(CatalogService);
  feature?: Feature;

  @Input()
  set featureName(name: string) {
    this.feature = this.catalogService.getFeatureByName(name);
  }
}
