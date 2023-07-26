import { Component, DestroyRef, Input, OnInit, inject } from '@angular/core';
import { Feature } from '../feature-catalog/feature.model';
import { CatalogService } from '../feature-catalog/catalog-service';
import { combineLatest } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'clip-feature-detail',
  templateUrl: './feature-detail.component.html',
  styleUrls: ['./feature-detail.component.scss'],
})
export class FeatureDetailComponent implements OnInit {
  
  @Input() featureName?: string;
  
  catalogService = inject(CatalogService);
  destroyRef = inject(DestroyRef);

  feature?: Feature;
  installed = false;

  ngOnInit(): void {
    combineLatest([
      this.catalogService.getFeatureByName(this.featureName ?? ''),
      this.catalogService.installedFeatures$,
    ])
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe(([feature, installedFeatures]) => {
        this.feature = feature;
        this.installed = installedFeatures.some((f) => f.id === feature?.id);
      });
  }

  install(feature: Feature) {
    this.catalogService.installFeature(feature);
  }

  remove(feature: Feature) {
    this.catalogService.removeFeature(feature.id);
  }
}
