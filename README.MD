## Dynamic Number Tab

	"Dynamic Number Tab" is a project developed in angular 2 and bootstrap with functionality of routing.
	This project can be used as a initial project setup.




	# Getting Started

		1) Download the "Dynamic Number Tab" folder, and install the required packages by following command.
			npm install.
			
		2) run ng serve

	# How to use?

		1) Number of tab that you want to show, specify in app.component.html
		 by providing value to filed [noOfHeadresToShow] in <app-header> tag.
		 
		  <app-header [noOfHeadresToShow]=4></app-header>

		2) Remaining tab you will get in dropdown list.
		 
		3) If you provide value of [noOfHeadresToShow] is equal to total number of tab then there will be no drop-down on web page.
 

	# Features
 
		 1) Routing
		 
		 2) You can enter url on address bar to get that page.
		 
		 3) sequence of tab always will be in order as you provide their index in header.json (in assets folder ).
