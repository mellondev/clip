import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from './user.model';
@Injectable({
  providedIn: 'root',
})
export class UserService {
  private isUserLoggedIn = new BehaviorSubject(false);
  private user = new BehaviorSubject<User | undefined>(undefined);

  isUserLoggedIn$ = this.isUserLoggedIn.asObservable();
  user$ = this.user.asObservable();

  checkCredentials(username: string, password: string) {
    if (password === 'demo') {
      this.isUserLoggedIn.next(true);
      this.user.next({ name: username, lastLoginDate: new Date() });
    }
  }

  logout() {
    this.isUserLoggedIn.next(false);
    this.user.next(undefined);
  }
}
