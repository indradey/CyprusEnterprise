import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';

import { Component } from '@angular/core';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';


// tslint:disable-next-line:class-name
const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'aboutus', component: AboutusComponent },
  { path: 'contactus', component: ContactusComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];

export const routing = RouterModule.forRoot(routes);
