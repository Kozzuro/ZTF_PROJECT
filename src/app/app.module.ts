import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AuthModule } from '@auth0/auth0-angular';
import {ReactiveFormsModule} from '@angular/forms';

import { environment } from '../environments/environment';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { RformComponent } from './rform/rform.component';

@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    RformComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AuthModule.forRoot(environment.auth0),
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [
  ],
  bootstrap: [
    AppComponent,
  ],
})
export class AppModule {
}
