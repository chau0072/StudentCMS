import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {FAQsComponent} from './faqs/faqs.component';
import { HelpComponent } from './help/help.component';

const informationRoutes: Routes = [
  
    { path: 'faq',  component: FAQsComponent,children:[
        { path: 'help', component: HelpComponent }

    ] }
   
];

@NgModule({
  imports: [RouterModule.forChild(informationRoutes)],
  exports: [RouterModule]
})
export class InformationRoutingModule {   }
