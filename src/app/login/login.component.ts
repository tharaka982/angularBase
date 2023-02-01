import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { NgForm } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm= new FormGroup({
    email: new FormControl(''),
    password: new FormControl('')
  });

  constructor(private auth:AuthService,private router:Router) { }

  ngOnInit(): void {
    if(this.auth.isLoggedIn()){
      this.router.navigate(['home']);
    }
  }
  onSubmit(){
    if(this.loginForm.valid){
      this.auth.login(this.loginForm.value).subscribe(
        (result)=>{
          this.router.navigate(['home']);
        },
        (err:Error)=>{
          alert(err.message);
        }
      )
    }
    console.log(this.loginForm.value);
  }

}
