import { GlobalEventsManager } from './../shared/GlobalEventsManager';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { UserService } from '../user/user.service';
import { CollapseModule } from 'ngx-bootstrap';

@Component({
  selector: 'pm-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  showNavbar = false;
  show = false;
  isCollapsed: boolean;

  constructor( private userService: UserService,
    private router: Router,
    private globalEventsManager: GlobalEventsManager
  ) {
    this.globalEventsManager.showNavBarEmitter.subscribe((mode) => {
        this.showNavbar = mode;
    });
}

toggleCollapse() {
  // this.show = !this.show
    this.show = !this.show;
  }
  logout() {
    this.userService.logout();
    this.globalEventsManager.showNavBar(false);
  }

  ngOnInit() {
    if (localStorage.getItem('token')) {
      this.showNavbar = true;
      } else {
        this.showNavbar = false;
      }
    }
}
