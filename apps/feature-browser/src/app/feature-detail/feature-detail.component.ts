import { Component, Input, OnInit, inject } from '@angular/core';
import { Feature } from '../feature-catalog/feature.model';
import { CatalogService } from '../feature-catalog/catalog-service';
import { Observable, tap } from 'rxjs';

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
      .getFeatureByName(this.featureName ? this.featureName : '')
      .pipe(tap((f) => console.log(f)));

    console.log(this.featureName);
  }
}
