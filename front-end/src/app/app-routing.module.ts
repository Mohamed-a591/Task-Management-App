import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Erorr404Component } from './pages/erorr404/erorr404.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { RegisterComponent } from './pages/register/register.component';

const routes: Routes = [
  {path:"", component:HomeComponent},
  {path:"register", component:RegisterComponent},
  {path:"login", component:LoginComponent},
  {path:"profile", component:ProfileComponent},
  {path:"**", component:Erorr404Component}  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
