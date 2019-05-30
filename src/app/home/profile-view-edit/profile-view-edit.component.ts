import {Component, OnInit} from '@angular/core';
import {HomeService} from '../../shared/home.service';
import {Router} from '@angular/router';
import {NgForm} from '@angular/forms';
import {HttpErrorResponse} from '@angular/common/http';

@Component({
  selector: 'app-profile-view-edit',
  templateUrl: './profile-view-edit.component.html',
  styleUrls: ['./profile-view-edit.component.css']
})
export class ProfileViewEditComponent implements OnInit {

  user: any;
  error = false;
  phonePattern = /^[0-9]{9}$/;

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

  OnSubmit(form: NgForm) {
    this.homeService.editUserData(localStorage.getItem('userToken'), form.value).subscribe((data: any) => {
          this.router.navigate(['/home/profile']);
        },
        (err: HttpErrorResponse) => {
          this.error = true;
        });
  }


}
