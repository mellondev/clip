import {
  Component,
  Input,
  OnChanges,
  ViewChild,
  ViewContainerRef,
  inject,
} from '@angular/core';
import { FeatureService } from '@clip/core';
import { loadRemoteModule } from '@nx/angular/mf';
import { DashboardFeatureWidget } from '../dashboard-feature-widget';

@Component({
  selector: 'clip-widget-proxy',
  template: `<ng-container #placeHolder></ng-container>`,
})
export class WidgetProxyComponent implements OnChanges {
  private featureService = inject(FeatureService);

  @ViewChild('placeHolder', { read: ViewContainerRef, static: true })
  viewContainer!: ViewContainerRef;

  @Input() featureWidget!: DashboardFeatureWidget

  async ngOnChanges() {
    // this.featureService.loadFeature(this.featureWidget.feature.name);
    this.viewContainer.clear();

    const component = await loadRemoteModule(
      this.featureWidget.feature.name,
      './' + this.featureWidget.widget.module
    ).then((m) => m[this.featureWidget.widget.componentName]);
    this.viewContainer.createComponent(component);
  }
}
