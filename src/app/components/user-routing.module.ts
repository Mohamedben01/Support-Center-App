import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccessGuardGuard } from '../services/guards/access-guard.guard';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddProductComponent } from './product/add-product/add-product.component';
import { EditProductComponent } from './product/edit-product/edit-product.component';
import { ListProductComponent } from './product/list-product/list-product.component';
import { ProductComponent } from './product/product.component';
import { AddTicketComponent } from './ticket/add-ticket/add-ticket.component';
import { ExploreTicketComponent } from './ticket/explore-ticket/explore-ticket.component';
import { ListTicketComponent } from './ticket/list-ticket/list-ticket.component';
import { TicketComponent } from './ticket/ticket.component';
import { UserManagementComponent } from './user-management/user-management.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children:[
      { path: 'ticket', component: TicketComponent, children: 
        [
          { path: 'addTicket', component: AddTicketComponent },
          { path: 'exploreTicket', component: ExploreTicketComponent },
          { path: 'listTicket', component: ListTicketComponent },
          { path: '', redirectTo: '/user/ticket/listTicket', pathMatch: 'full' }
        ] 
      },
      { path: 'product', component: ProductComponent, children:
       [
         { path: 'listProduct', component: ListProductComponent },
         { path: 'addProduct', component: AddProductComponent },
         { path: 'editProduct', component: EditProductComponent },
         { path: '', redirectTo: '/user/product/listProduct', pathMatch: 'full' }
       ]
      },
      { path: 'management', component: UserManagementComponent },
      { path: '', redirectTo: '/user/ticket', pathMatch: 'full' },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
