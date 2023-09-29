import { Component, Input, inject } from '@angular/core';
import { Feature } from '../../feature-catalog/feature.model';
import { CatalogService } from '../../feature-catalog/catalog-service';

@Component({
  selector: 'clip-feature-changelog',
  templateUrl: './feature-changelog.component.html',
  styleUrls: ['./feature-changelog.component.scss'],
})
export class FeatureChangelogComponent {
  catalogService = inject(CatalogService);
  feature?: Feature;

  @Input()
  set featureName(name: string) {
    this.feature = this.catalogService.getFeatureByName(name);
  }
}
