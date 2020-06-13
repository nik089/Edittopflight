import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { EditflightComponent } from './editflight/editflight.component';



const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'cart'},
  {
    path:'cart', component:CartComponent
  },
  {path:'edittopflight/:key._id', component:EditflightComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
