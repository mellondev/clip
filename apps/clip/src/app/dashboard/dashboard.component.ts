import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  ViewEncapsulation,
  inject,
} from '@angular/core';
import { UserService } from '@clip/shared/user';
import {
  CompactType,
  DisplayGrid,
  GridsterConfig,
  GridsterItem,
  GridType,
} from 'angular-gridster2';
import { DashboardFeatureWidget } from './dashboard-feature-widget';

@Component({
  selector: 'clip-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class DashboardComponent implements OnInit {
  private userService = inject(UserService);
  user$ = this.userService.user$;

  options!: GridsterConfig;
  dashboard!: Array<GridsterItem>;

  designMode = false;

  // feature: Feature = {
  //   name: 'clip-feature-browser',
  //   title: 'Features',
  //   description: 'Manage all your clip features, you can enable & disable features as well as configure your new features',
  //   remoteUrl: 'http://localhost:4202'
  // };

  dynamicDashboardItem: GridsterItem = {
    x: 0,
    y: 3,
    rows: 4,
    cols: 4,
  };

  ngOnInit() {
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

    this.dashboard = [];
  }

  changedOptions() {
    if (this.options?.api?.optionsChanged) {
      this.options.api.optionsChanged();
    }
  }

  toggleDesignMode() {
    if (this.options?.api) {
      this.designMode = !this.designMode;

      console.log(this.options);
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
  }

  addItem() {
    this.dashboard.push({
      x: 0,
      y: 0,
      rows: 1,
      cols: 1,
    });
  }

  addWidget(featureWidget: DashboardFeatureWidget) {
    this.dashboard.push({
      x: 0,
      y: 0,
      rows: 4,
      cols: 4,
      featureWidget,
    });
  }
}
