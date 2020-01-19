import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FAQsComponent } from './faqs/faqs.component';
import { HelpComponent } from './help/help.component';
 import{InformationRoutingModule} from './information-routing.module'
import { ReactiveFormsModule } from '@angular/forms';
 
 



@NgModule({
  declarations: [FAQsComponent, HelpComponent],
  imports: [
    CommonModule,ReactiveFormsModule,InformationRoutingModule
  ],
  exports:[FAQsComponent,HelpComponent]
})
export class InformationModule { }
