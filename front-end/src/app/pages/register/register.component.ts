import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm = new FormGroup({
      name : new FormControl(''),
      email : new FormControl(''),
      password : new FormControl(''),
      phone : new FormControl(''),
      gender : new FormControl(''),
      age : new FormControl(''),
      type : new FormControl("admin")
  })


  constructor(private _data:DataService, private toastr: ToastrService, private router:Router) { 
    this.toastr.success("Success", "Registered succesfully!")
  }

  ngOnInit(): void {

  }

  onRegister() {
    console.log(this.registerForm.value);
    this._data.register(this.registerForm.value).subscribe(
      (data) =>console.log(data),
      (e) => console.log(e),
      () => {
        this.toastr.success("Success", "Registered succesfully!")
        this.router.navigate(['/login'])
      }
    )
    this.registerForm.reset()
  }

}
