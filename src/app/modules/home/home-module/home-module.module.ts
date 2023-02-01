import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeModuleRoutingModule } from './home-module-routing.module';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';




console.log()
@NgModule({
  declarations: [
    HomeComponent,
    DashboardComponent,

  ],
  imports: [
    CommonModule,
    HomeModuleRoutingModule,
    // BrowserModule,
    // BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    NgbModule,
  ]
})
export class HomeModuleModule { }
