import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { StatusComponent } from './components/status/status.component';
import { NetworksComponent } from './components/networks/networks.component';
import { EnvironmentsComponent } from './components/environments/environments.component';
import { LoginComponent } from './components/login/login.component';
import { StatusDetailComponent } from './components/status-detail/status-detail.component';

const appRoutes: Routes = [
  { path: 'login', component: LoginComponent},
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'status', component: StatusComponent},
  { path: 'networks', component: NetworksComponent},
  { path: 'environments', component: EnvironmentsComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    StatusComponent,
    NetworksComponent,
    EnvironmentsComponent,
    LoginComponent,
    StatusDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
