import { Component, DestroyRef, Input, OnInit, inject } from '@angular/core';
import { Feature } from '../feature-catalog/feature.model';
import { CatalogService } from '../feature-catalog/catalog-service';
import { FeatureService } from '@clip/core';

@Component({
  selector: 'clip-feature-detail',
  templateUrl: './feature-detail.component.html',
  styleUrls: ['./feature-detail.component.scss'],
})
export class FeatureDetailComponent implements OnInit {
  @Input() featureName?: string;

  catalogService = inject(CatalogService);
  featureService = inject(FeatureService);

  destroyRef = inject(DestroyRef);

  feature?: Feature;
  installed = false;

  ngOnInit(): void {
    this.feature = this.catalogService.getFeatureByName(this.featureName ?? '');
    this.installed = this.featureService.isFeatureInstalled(
      this.featureName ?? ''
    );
  }

  install(feature: Feature) {
    this.catalogService.installFeature(feature);
  }

  remove(feature: Feature) {
    this.catalogService.removeFeature(feature.id);
  }
}
