import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SingleDealComponent } from './single-deal/single-deal.component';


const routes: Routes = [
  {path:'',redirectTo:'single-deal',pathMatch:'full'},
  {path:'single-deal',component:SingleDealComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UnderlyingMatchingRoutingModule { }
