import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NavbarComponent } from './navbar/navbar.component';
import { TicketComponent } from './ticket/ticket.component';
import { ProductComponent } from './product/product.component';
import { UserManagementComponent } from './user-management/user-management.component';


@NgModule({
  declarations: [DashboardComponent, NavbarComponent, TicketComponent, ProductComponent, UserManagementComponent],
  imports: [
    CommonModule,
    UserRoutingModule
  ]
})
export class UserModule { }
