import { Component, OnInit } from '@angular/core';
import { Routes, RouterModule ,Router } from '@angular/router';
 

@Component({
  selector: 'app-faqs',
  templateUrl: './faqs.component.html',
  styleUrls: ['./faqs.component.css']
})
export class FAQsComponent implements OnInit {
  public isViewable: boolean;
  router: any;
   

  constructor() { }

  ngOnInit() {this.isViewable = true; 
  }
 
  public toggle(): void { this.isViewable = !this.isViewable; }
 



}
