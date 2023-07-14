import { Component, EventEmitter, Output, inject } from '@angular/core';
import { Feature, FeatureService } from '@clip/core';
import { Observable, map } from 'rxjs';
import { DashboardFeatureWidget } from '../dashboard-feature-widget';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'clip-feature-browser',
  templateUrl: './feature-browser.component.html',
  styleUrls: ['./feature-browser.component.scss'],
})
export class FeatureBrowserComponent {
  private featureService = inject(FeatureService);
  features$: Observable<Feature[]>;

  @Output() widgetAdded = new EventEmitter<DashboardFeatureWidget>();

  constructor() {
    this.features$ = this.featureService.features.pipe(
      takeUntilDestroyed(),
      map((features) => features.filter((f) => f.dashboardWidgets?.length > 0))
    );
  }

  addWidget(featureWidget: DashboardFeatureWidget) {
    this.widgetAdded.emit(featureWidget);
  }
}
