import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page6',
  templateUrl: './page6.component.html',
  styleUrls: ['./page6.component.css']
})
export class Page6Component implements OnInit {

  constructor() { }

  ngOnInit() {
	setTimeout(function(){
		  let selectedElem = document.getElementById("header5");
			selectedElem.className += " selected_header";
	  },10)
  }

}
