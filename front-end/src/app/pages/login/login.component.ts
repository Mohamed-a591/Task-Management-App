import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
    email : new FormControl('', [Validators.required, Validators.minLength(3), Validators.email]),
    password : new FormControl('', [Validators.required, Validators.minLength(8)])
  })

  submitError = ""

  constructor(private _data:DataService, private router:Router, private toastr:ToastrService) { }

  ngOnInit(): void {
  }

  get email() {return this.loginForm.get("email")}
  get password() {return this.loginForm.get("password")}

  login() {
    console.log(this.loginForm.valid);
    if(this.loginForm.valid){
      this._data.login(this.loginForm.value).subscribe(
        res=>{
          localStorage.setItem("token", res.data.token)
        },
        (e)=>{
          this.submitError = e.error.message;
        },
        ()=>{
          this.submitError = ''
          this._data.isAuthed = true
          this.toastr.success("Success", "Registered succesfully!")
          this.router.navigate(["/profile"])
        }
      )
      this.loginForm.reset()
    }
  }

}
