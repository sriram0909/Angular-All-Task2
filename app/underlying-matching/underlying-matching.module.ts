import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UnderlyingMatchingRoutingModule } from './underlying-matching-routing.module';
import { SingleDealComponent } from './single-deal/single-deal.component';


@NgModule({
  declarations: [
    SingleDealComponent
  ],
  imports: [
    CommonModule,
    UnderlyingMatchingRoutingModule
  ]
})
export class UnderlyingMatchingModule { }
