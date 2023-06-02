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

  static itemChange(item: unknown, itemComponent: unknown) {
    console.info('itemChanged', item, itemComponent);
  }

  static itemResize(item: unknown, itemComponent: unknown) {
    console.info('itemResized', item, itemComponent);
  }

  ngOnInit() {
    this.options = {
      itemChangeCallback: DashboardComponent.itemChange,
      itemResizeCallback: DashboardComponent.itemResize,
      draggable: {
        enabled: false,
      },
      resizable: {
        enabled: false,
      },
      gridType: GridType.Fixed,
      displayGrid: DisplayGrid.None,
      compactType: CompactType.None,
    };

    this.dashboard = [
      { cols: 2, rows: 1, y: 0, x: 0 },
      { cols: 2, rows: 1, y: 0, x: 2 },
    ];
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
      console.log(this.options);
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
}
