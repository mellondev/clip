import { Component, Input, OnInit, inject } from '@angular/core';
import { Feature } from '../feature-catalog/feature.model';
import { CatalogService } from '../feature-catalog/catalog-service';
import { Observable } from 'rxjs';

@Component({
  selector: 'clip-feature-detail',
  templateUrl: './feature-detail.component.html',
  styleUrls: ['./feature-detail.component.scss'],
})
export class FeatureDetailComponent implements OnInit {
  @Input() featureName?: string;
  catalogService = inject(CatalogService);

  feature$?: Observable<Feature | undefined>;

  ngOnInit(): void {
    this.feature$ = this.catalogService
      .getFeatureByName(this.featureName ? this.featureName : '');
  }

  install(feature: Feature) {
    this.catalogService.installFeature(feature);
  }

  remove(feature: Feature) {
    this.catalogService.removeFeature(feature.id);
  }
}
