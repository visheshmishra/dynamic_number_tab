import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page5',
  templateUrl: './page5.component.html',
  styleUrls: ['./page5.component.css']
})
export class Page5Component implements OnInit {

  constructor() { }

  ngOnInit() {
	setTimeout(function(){
		  let selectedElem = document.getElementById("header4");
			selectedElem.className += " selected_header";
	  },10)
 }

}
