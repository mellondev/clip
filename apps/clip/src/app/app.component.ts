import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '@clip/shared/user';
import { Feature, FeatureService } from '@clip/shared/clip-core';
import { setRemoteDefinitions } from '@nx/angular/mf';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable, map, shareReplay } from 'rxjs';

@Component({
  selector: 'clip-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  private breakpointObserver = inject(BreakpointObserver);

  isLoggedIn$ = this.userService.isUserLoggedIn$;
  features$ = this.featureService.features;

  remoteDefinitions: Record<string, string> = {};

  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(
      map((result) => result.matches),
      shareReplay()
    );

  constructor(
    private userService: UserService,
    private featureService: FeatureService,
    private router: Router
  ) {}

  loadFeature(feature: Feature) {
    if (feature) {
      this.remoteDefinitions[feature.name] = feature.remoteUrl;
      console.log(this.remoteDefinitions);
    }
    setRemoteDefinitions(this.remoteDefinitions);
    this.router.navigateByUrl('login');
  }

  // ngOnInit() {
  //   this.isLoggedIn$
  //     .pipe(distinctUntilChanged())
  //     .subscribe(async (loggedIn) => {
  //       // Queue the navigation after initialNavigation blocking is completed
  //       setTimeout(() => {
  //         if (!loggedIn) {
  //           this.router.navigateByUrl('login');
  //         } else {
  //           this.router.navigateByUrl('dashboard');
  //         }
  //       });
  //     });
  // }
}
