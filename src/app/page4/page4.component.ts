import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page4',
  templateUrl: './page4.component.html',
  styleUrls: ['./page4.component.css']
})
export class Page4Component implements OnInit {

  constructor() { }

  ngOnInit() {
	setTimeout(function(){
		  let selectedElem = document.getElementById("header3");
			selectedElem.className += " selected_header";
	  },10)
  }

}
