import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';

import { HomeComponent } from './home/home.component';
import { Page1Component } from './page1/page1.component';
import { Page2Component } from './page2/page2.component';
import { Page3Component } from './page3/page3.component';
import { Page4Component } from './page4/page4.component';
import { Page5Component } from './page5/page5.component';
import { Page6Component } from './page6/page6.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent ,
	children:[
	{ path: '', redirectTo: 'home', pathMatch: 'full' },
	{ path:'Tab1', component: Page1Component },
	{ path: 'Tab2', component: Page2Component },
	{ path: 'Tab3', component: Page3Component },
	{ path: 'Tab4', component: Page4Component },
	{ path: 'Tab5', component: Page5Component },
	{ path: 'Tab6', component: Page6Component }
	]
	}
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}