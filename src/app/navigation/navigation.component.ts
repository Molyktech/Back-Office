import { Component, OnInit } from '@angular/core';
import {
  animate,
  state,
  style,
  transition,
  trigger
} from '@angular/animations';
import { Router } from '@angular/router';
import { User } from '../models/user';
import { Subscription }  from 'rxjs';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
  animations: [
    trigger('indicatorRotate', [
      state('collapsed', style({ transform: 'rotate(0deg)' })),
      state('expanded', style({ transform: 'rotate(180deg)' })),
      transition(
        'expanded <=> collapsed',
        animate('225ms cubic-bezier(0.4,0.0,0.2,1)')
      )
    ])
  ]
})
export class NavigationComponent implements OnInit {
  isMenuOpen = true;
  contentMargin = 240;
  expanded: boolean;
  open = false;
  user: User 
  currentUserSubscription: Subscription;

  navItems = [
    {
      displayName: 'Documents',
      iconName: 'note_add',
      route: 'navigation/document',
      children: [
        {
          displayName: 'Speakers',
          iconName: 'group',
          route: 'devfestfl/speakers'
        }
      ]
    }
  ];

  constructor(public router: Router, private loginService: LoginService) {
    this.currentUserSubscription = this.loginService.currentUser.subscribe(user => {
      this.user = user;
    });
  }
  ngOnInit() {
    //console.log(this.user);
  }

  ngOnDestroy() {
    // unsubscribe to ensure no memory leaks
    this.currentUserSubscription.unsubscribe();
}
  onToolbarMenuToggle() {
    console.log('On toolbar toggled', this.isMenuOpen);
    this.isMenuOpen = !this.isMenuOpen;

    if (!this.isMenuOpen) {
      this.contentMargin = 70;
    } else {
      this.contentMargin = 240;
    }
  }
  openDropdown() {
    this.open = !this.open;
  }

  onItemSelected(item) {
    if (!item.children || !item.children.length) {
      this.router.navigate([item.route]);
    }
    if (item.children && item.children.length) {
      this.expanded = !this.expanded;
    }
  }

  logOut() {
    
   
      this.loginService.logout();
      this.router.navigate(['/login']);
  

  }
}
