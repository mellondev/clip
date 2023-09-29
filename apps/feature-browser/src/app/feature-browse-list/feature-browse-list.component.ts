import { Component, Input, computed, inject } from '@angular/core';
import { CatalogService } from '../feature-catalog/catalog-service';

@Component({
  selector: 'clip-feature-browse-list',
  templateUrl: './feature-browse-list.component.html',
  styleUrls: ['./feature-browse-list.component.scss'],
})
export class FeatureBrowseListComponent {
  @Input({ required: true }) tag?: string;
  catalogService = inject(CatalogService);

  features = computed(() =>
    this.catalogService
      .featureCatalog()
      .filter((f) => f.tags.includes(this.tag ?? ''))
  );
}
