import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProductComponent } from './product/product.component';
import { TicketComponent } from './ticket/ticket.component';
import { UserManagementComponent } from './user-management/user-management.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children:[
      { path: 'ticket', component: TicketComponent },
      { path: 'product', component: ProductComponent },
      { path: 'management', component: UserManagementComponent },
      { path: '', redirectTo: '/user/ticket', pathMatch: 'full' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
