import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Router, RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { APP_ROUTES } from './app.routes';
import { HttpClientModule } from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { LayoutComponent } from './layout/layout.component';
import { SideNavComponent } from './layout/side-nav/side-nav.component';
import { GridsterModule } from 'angular-gridster2';
import { WidgetProxyComponent } from './dashboard/widget-proxy/widget-proxy.component';
import { FeatureBrowserComponent } from './dashboard/feature-browser/feature-browser.component';
import { FeatureService } from '@clip/core';
import { tap } from 'rxjs';
import { loadRemoteModule } from '@nx/angular/mf';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LayoutComponent,
    SideNavComponent,
    WidgetProxyComponent,
    FeatureBrowserComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,

    RouterModule.forRoot(APP_ROUTES, { bindToComponentInputs: true, paramsInheritanceStrategy: 'always' }),

    BrowserAnimationsModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatFormFieldModule,
    MatInputModule,
    MatProgressBarModule,
    GridsterModule,
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: initializeApplication,
      multi: true,
      deps: [Router, FeatureService],
    }
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

export function initializeApplication(router: Router, featureService: FeatureService)  {
  return () => featureService.loadFeatures().pipe(
    tap((features) => {
      const featureRoutes: Routes = features
      .filter((f) => f.route)
      .map((f) => ({
        path: f.route?.route ?? f.name,
        loadChildren: () =>
          loadRemoteModule(f.name, f.route?.module ?? './Module').then(
            (m) => m.RemoteEntryModule
          ),
      }))


      APP_ROUTES[0].children?.push(...featureRoutes);
      console.log(APP_ROUTES);
      router.resetConfig(APP_ROUTES);
    })
  )
}