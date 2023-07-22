import { Component, Input, OnInit, inject } from '@angular/core';
import { CatalogService } from '../feature-catalog/catalog-service';
import { Observable } from 'rxjs';
import { Feature } from '../feature-catalog/feature.model';

@Component({
  selector: 'clip-feature-browse-list',
  templateUrl: './feature-browse-list.component.html',
  styleUrls: ['./feature-browse-list.component.scss'],
})
export class FeatureBrowseListComponent implements OnInit {
  
  @Input({required: true}) tag?: string;
  catalogService = inject(CatalogService);

  features$?: Observable<Feature[]>;

  ngOnInit(): void {
    this.features$ = this.catalogService.getFeaturesByTag(this.tag || '');
  }
}
