import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MoviedetailsRoutingModule } from './moviedetails-routing.module';
import { MoviedetailsComponent } from './moviedetails.component';
import { NumberfixedPipe } from '../Pipes/numberfixed.pipe';



@NgModule({
  declarations: [MoviedetailsComponent, NumberfixedPipe],
  imports: [
    CommonModule,
    MoviedetailsRoutingModule  ]
})
export class MoviedetailsModule { }
