import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page3',
  templateUrl: './page3.component.html',
  styleUrls: ['./page3.component.css']
})
export class Page3Component implements OnInit {

  constructor() { }

  ngOnInit() {
	setTimeout(function(){
		  let selectedElem = document.getElementById("header2");
			selectedElem.className += " selected_header";
	  },10)
  }

}
