import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '@auth0/auth0-angular';

import { RformComponent } from './rform/rform.component';

import { SignInComponent } from './sign-in/sign-in.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'signIn',
  },
  {
    path: 'rform',
    component: RformComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'signIn',
    component: SignInComponent,
  },
  {
    path: '**',
    redirectTo: 'signIn',
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [
    RouterModule,
  ],
})
export class AppRoutingModule {
}
