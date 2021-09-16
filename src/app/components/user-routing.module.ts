import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccessGuardGuard } from '../services/guards/access-guard.guard';
import { AddProductComponent } from './add-product/add-product.component';
import { AddTicketComponent } from './add-ticket/add-ticket.component';
import { AddUserComponent } from './add-user/add-user.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { ExploreTicketComponent } from './explore-ticket/explore-ticket.component';
import { ProductComponent } from './product/product.component';
import { TicketComponent } from './ticket/ticket.component';
import { UserManagementComponent } from './user-management/user-management.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children:[
      { path: 'ticket', component: TicketComponent },
      { path: 'addTicket', component: AddTicketComponent },
      { path: 'exploreTicket', component: ExploreTicketComponent },
      { path: 'product', component: ProductComponent },
      { path: 'addProduct', canActivate: [AccessGuardGuard], component: AddProductComponent },
      { path: 'editProduct', canActivate: [AccessGuardGuard], component:EditProductComponent },
      { path: 'management', canActivate: [AccessGuardGuard], component: UserManagementComponent },
      { path: 'addUser', canActivate: [AccessGuardGuard], component: AddUserComponent },
      { path: 'editUser', canActivate: [AccessGuardGuard], component: EditUserComponent },
      { path: '', redirectTo: '/user/ticket', pathMatch: 'full' },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
