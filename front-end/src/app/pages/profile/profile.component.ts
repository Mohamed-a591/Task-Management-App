import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  user:any = ""

  constructor(private _data:DataService) { }

  ngOnInit(): void {
    this._data.profile().subscribe(
      (data)=> {this.user = {...data.data.userData}},
      (e)=>console.log(e),
      ()=>{console.log(this.user);
      }
    )
  }

}
