import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user.model';
import { UserService } from '../../shared/user.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
    selector: 'app-register-view',
    templateUrl: './register-view.component.html',
    styles: []
})
export class RegisterViewComponent implements OnInit {

    user: User;
    emailPattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
    passwordPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,20}$/;
  
    isRegisterError: boolean = false;
  
    constructor(private userService: UserService, private router: Router) { }

    ngOnInit() {
      this.resetForm();
    }
  
    resetForm(form?: NgForm) {
      if (form != null)
        form.reset();
      this.user = {
          name: '',
          surname: '',
        email:	'',
        password:	''
      }
    }

    OnSubmit(form: NgForm) {
  
      this.userService.registerUser(form.value).subscribe((data: any) => {
          this.router.navigate(['/login']);
      },
      (err: HttpErrorResponse) => {
          this.isRegisterError = true;
      });
    }

}
