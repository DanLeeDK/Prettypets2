import { Router } from '@angular/router';
import { UserCredentials, UserService } from './../user.service';
import { Component, OnInit } from '@angular/core';
import { GlobalEventsManager } from '../../shared/GlobalEventsManager';

@Component({
  selector: 'pm-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loggedIn: boolean;
  credentials: UserCredentials;

  constructor(
    private userService: UserService,
    private router: Router,
    private globalEventsManager: GlobalEventsManager
  ) {
    this.credentials = new UserCredentials();
  }
y
  ngOnInit() {
    if (localStorage.getItem('token')) {
      this.loggedIn = false;
    } else {
      this.loggedIn = true;
    }
  }

  public login() {
     this.userService.login(this.credentials).subscribe(
       (res) => {
        this.globalEventsManager.showNavBar(true);
        this.router.navigate(['welcome']);
       }
     );
  }
}
