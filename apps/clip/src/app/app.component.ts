import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '@clip/shared/user';
import { Feature, FeatureService } from '@clip/shared/clip-core';
import { setRemoteDefinitions } from '@nx/angular/mf';

@Component({
  selector: 'clip-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  isLoggedIn$ = this.userService.isUserLoggedIn$;
  features$ = this.featureService.getFeatures();

  remoteDefinitions: Record<string, string> = {};

  constructor(private userService: UserService, private featureService: FeatureService, private router: Router) {}

  simpleClick(feature: any) {
    console.log(feature)
  }

  loadFeature(feature: Feature) {
    if (feature) {
      this.remoteDefinitions[feature.name] = feature.remoteUrl
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