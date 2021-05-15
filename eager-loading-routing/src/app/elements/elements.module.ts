import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ElementsRoutingModule } from './elements-routing.module';
import { ElementsComponent } from './elements/elements.component';


@NgModule({
  declarations: [
    ElementsComponent
  ],
  imports: [
    CommonModule,
    ElementsRoutingModule
  ],
  exports:[
    ElementsComponent
  ]
})
export class ElementsModule { }
