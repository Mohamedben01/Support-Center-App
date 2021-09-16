import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from "@angular/forms";

import { UserRoutingModule } from './user-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NavbarComponent } from './navbar/navbar.component';
import { TicketComponent } from './ticket/ticket.component';
import { ProductComponent } from './product/product.component';
import { UserManagementComponent } from './user-management/user-management.component';
import { AddTicketComponent } from './add-ticket/add-ticket.component';
import { ExploreTicketComponent } from './explore-ticket/explore-ticket.component';
import { AddUserComponent } from './add-user/add-user.component';
import { AddProductComponent } from './add-product/add-product.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { EditUserComponent } from './edit-user/edit-user.component';


@NgModule({
  declarations: [DashboardComponent, NavbarComponent, TicketComponent, ProductComponent, UserManagementComponent, AddTicketComponent, ExploreTicketComponent, AddUserComponent, AddProductComponent, EditProductComponent, EditUserComponent],
  imports: [
    CommonModule,
    UserRoutingModule,
    ReactiveFormsModule
  ]
})
export class UserModule { }
