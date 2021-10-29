import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatIconModule } from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';  
import { CardComponent } from './commen/card/card.component';
import { NavbarComponent } from './commen/navbar/navbar.component';
import { SliderComponent } from './commen/slider/slider.component';
import { FooterComponent } from './commen/footer/footer.component';
import { RegisterComponent } from './pages/register/register.component';
import { LoginComponent } from './pages/login/login.component';
import { Erorr404Component } from './pages/erorr404/erorr404.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { SidebarComponent } from './commen/sidebar/sidebar.component';
import { DataService } from './services/data.service';
import { AuthInterceptor } from './interceptors/auth.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CardComponent,
    NavbarComponent,
    SliderComponent,
    FooterComponent,
    RegisterComponent,
    LoginComponent,
    Erorr404Component,
    ProfileComponent,
    SidebarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    DragDropModule,
    MatIconModule,
    ToastrModule.forRoot({ positionClass: 'inline' })
  ],
  providers: [
    DataService,
    {provide: HTTP_INTERCEPTORS, useClass:AuthInterceptor, multi: true},
  
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
