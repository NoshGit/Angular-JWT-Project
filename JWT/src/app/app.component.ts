import { Component } from '@angular/core';
import { AppUserAuth } from './security/app-user-auth';
import { SecurityService } from './security/security.service';

@Component({
  selector: 'ptc-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  userData: AppUserAuth = null;

  title: string = "Paul's Training Company";

  constructor(private secureService: SecurityService){
    this.userData = secureService.securityObject;
  }

  logout(): void {
    this.secureService.logout();
  }
}
