import {Component, OnInit} from '@angular/core';
import {HomeService} from '../../shared/home.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-profile-view',
  templateUrl: './profile-view.component.html'
})
export class ProfileViewComponent implements OnInit {

  user: any;

  constructor(private homeService: HomeService, private router: Router) {
  }

  ngOnInit() {
    this.loadUserData();
  }

  loadUserData() {
    return this.homeService.getUserData(localStorage.getItem('userToken')).subscribe((data => {
      this.user = data;
    }));
  }








}
