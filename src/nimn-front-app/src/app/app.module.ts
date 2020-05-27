
import { NavbarComponent } from './navbar/navbar.component';
import { RegisterComponent } from './register/register.component';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule} from '@angular/forms'; 
import { AppRoutingModule } from './app-routing.module';
import {RouterModule} from '@angular/router';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCardModule,MatToolbarModule, MatInputModule} from '@angular/material';
import {ApiService} from "./api.service";


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    RouterModule,
    MatButtonModule, 
    MatCardModule,
    MatToolbarModule,
    MatInputModule,
    RouterModule.forRoot([
      {path :"register", component: RegisterComponent}
    ])

  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
