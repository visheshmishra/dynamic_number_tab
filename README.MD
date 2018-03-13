# Dynamic Number Tab

	Dynamic Number Tab is a project developed in angular 2 and bootstrap with functionality of routing.
	This project can be used as a initial project setup.




	# Getting Started

		Download the "Dynamic Number Tab" folder, and install the required packages by following command.
			npm install.
			
		run ng serve

	# How to use?

		 Number of tab that you want to show, specify in app.component.html
		 by providing value to filed [noOfHeadresToShow] in <app-header> tag.
		 
		  <app-header [noOfHeadresToShow]=4></app-header>

		 Remaining tab you will get in dropdown list.
      for example
		 <p> 
      <img src="img/sample_page1"/>
     </p>
		 If you provide value of [noOfHeadresToShow] is equal to total number of tab then there will be no drop-down on web page.
      for example
		 <p> 
      <img src="img/sample_page2"/>
     </p>
 

	# Features
 
		 Routing
		 
		 You can enter url on address bar to get that page.
		 
		 sequence of tab always will be in order as you provide their index in header.json (in assets folder ).
