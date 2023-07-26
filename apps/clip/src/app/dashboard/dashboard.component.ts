import {
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  OnInit,
  ViewEncapsulation,
  inject,
} from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import {
  CompactType,
  DisplayGrid,
  GridsterConfig,
  GridsterItem,
  GridType,
} from 'angular-gridster2';
import { DashboardFeatureWidget } from './dashboard-feature-widget';
import {
  DashboardItem,
  DashboardService,
  FeatureService,
  UserService,
} from '@clip/core';

@Component({
  selector: 'clip-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  providers: [DashboardService],
  changeDetection: ChangeDetectionStrategy.Default,
  encapsulation: ViewEncapsulation.None,
})
export class DashboardComponent implements OnInit {
  private userService = inject(UserService);
  private featureService = inject(FeatureService);
  private dashboardService = inject(DashboardService);

  destroyRef = inject(DestroyRef)
  user$ = this.userService.user$;
  options: GridsterConfig;
  dashboard: GridsterItem[] = [];

  designMode = false;
  isLoading = true;

  constructor() {
    this.options = {
      draggable: {
        enabled: false,
      },
      resizable: {
        enabled: false,
      },
      gridType: GridType.Fixed,
      displayGrid: DisplayGrid.None,
      compactType: CompactType.None,
      fixedColWidth: 100,
      fixedRowHeight: 100,
    };
  }

  ngOnInit() {
    this.dashboard = [];

    this.featureService.features$
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((resp) => {
        console.log('features', resp);
        this.dashboard = this.dashboardService.loadDashboard().map((item) => {
          const feature = resp.find((f) => f.name === item.featureName);
          const widget = feature?.dashboardWidgets?.find(
            (w) => w.name === item.widgetName
          );
          return {
            x: item.x,
            y: item.y,
            rows: item.rows,
            cols: item.cols,
            featureWidget: { feature, widget },
            featureName: item.featureName,
            widgetName: item.widgetName
          };
        });
        console.log(this.dashboard);
        this.isLoading = false;
      });
  }

  changedOptions() {
    if (this.options?.api?.optionsChanged) {
      this.options.api.optionsChanged();
    }
  }

  onToggleDesignMode() {
    if (this.designMode) {
      const dashboardConfig: DashboardItem[] = this.dashboard.map(
        (item: any) => {
          return {
            x: item.x,
            y: item.y,
            rows: item.rows,
            cols: item.cols,
            featureName: item.featureWidget?.feature?.name,
            widgetName: item.featureWidget?.widget?.name
          };
        }
      );
      localStorage.setItem('dashboardConfig', JSON.stringify(dashboardConfig));
      console.log('dashboardConfig', dashboardConfig);
    }

    if (this.options?.api) {
      this.designMode = !this.designMode;
      this.options = {
        ...this.options,
        ...{ draggable: { enabled: this.designMode } },
        ...{ resizable: { enabled: this.designMode } },
      };
      this.changedOptions();
    }
  }

  removeItem(item: any) {
    this.dashboard.splice(this.dashboard.indexOf(item), 1);
    this.changedOptions();
  }

  addItem() {
    this.dashboard.push({
      x: 0,
      y: 0,
      rows: 1,
      cols: 1,
    });
    console.log(this.dashboard);
  }

  addWidget(featureWidget: DashboardFeatureWidget) {
    this.dashboard.push({
      x: 0,
      y: 0,
      rows: 4,
      cols: 4,
      featureWidget
    });

    console.log(this.dashboard);
  }
}
