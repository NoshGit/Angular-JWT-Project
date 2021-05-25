import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AppUser } from '../security/app-user';
import { AppUserAuth } from '../security/app-user-auth';
import { SecurityService } from '../security/security.service';

@Component({
  selector: 'ptc-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: AppUser = new AppUser();
  securityObject: AppUserAuth = null;
  returnUrl: string;
  constructor(
    private securityService: SecurityService,
    private route: ActivatedRoute,
    private router: Router
    ) { }

  login(): void {
    this.securityService.login(this.user).subscribe(
      data => {
        this.securityObject = data;
        if(this.returnUrl){
          this.router.navigateByUrl(this.returnUrl);
        }/*else{
          this.router.navigate(['/dashboard']);
        }*/
      },
      () => {
        // Initialized Security Object to Display Error Message on Screen.
        this.securityObject = new AppUserAuth();
      }
    );
  }
  ngOnInit(): void {
    this.returnUrl = this.route.snapshot.queryParamMap
    .get('returnUrl');
  }

}
