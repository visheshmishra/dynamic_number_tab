import { Component, OnInit,ElementRef,Input} from '@angular/core';
import {HeaderService} from '../header.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
	@Input() noOfHeadresToShow: number=0;
	
	private headerList:any = [];
	private widthPercentage:number;
	private widthSelectBox:number;
	private showHeaderList:any = [];
	private dropdownHeaderList:any = [];
	private selectedTabIndex:number = 0;
	private selectedTab:String;
	
  constructor(private _headerService: HeaderService, private elemRef:ElementRef, private activatedRoute:ActivatedRoute) { }

	ngOnInit() {
		 //get headers 
		 this._headerService.getHeader().then(
		  (val) => {
			  this.headerList = val;
			  this.setHeader();
				  if(window.location && window.location.pathname){
					  let tabIdx = window.location.pathname.lastIndexOf('/');
					  this.selectedTab = window.location.pathname.substr(tabIdx+1,window.location.pathname.length);
					  if(!this.selectedTab){
						window.location.pathname="/home/Tab1"; 
					  }else{
						 //check whether entered tab in dropdownHeaderList
						 for(let i in this.dropdownHeaderList){
							if(this.selectedTab==this.dropdownHeaderList[i].header){
								this.showInHeader(this.dropdownHeaderList[i],i);
								break;
							}
						}
					   //check whether in show tablist
						if(this.selectedTabIndex==0){
							for(let i in this.showHeaderList){
								if(this.selectedTab==this.showHeaderList[i].header){
									this.selectedTabIndex = this.showHeaderList[i].index;
									this.selectHeader(this.showHeaderList[i].index);
									break;
								}
							}
						}
					}
				}
			},
		   (err) => console.log(err),
		);
	}
  
  // set the header initially
    setHeader = () =>{
		for(let i in this.headerList){
			let j = 1;
			if(this.showHeaderList.length<this.noOfHeadresToShow){
				this.showHeaderList.push(this.headerList[i]);
			}else{
				this.dropdownHeaderList.push(this.headerList[i]);
			}
		}
		if(this.dropdownHeaderList.length>0){
			this.widthSelectBox = 4;
			this.widthPercentage = 96/this.noOfHeadresToShow;
		}else{
			this.widthPercentage = 100/this.noOfHeadresToShow;
		}
    }
  
  
	//after selecting a header
	selectHeader = (index) =>{
		let elem = document.getElementById("header"+index);
		if(elem && elem.classList && !elem.classList.contains("selected_header")){
				for(let i in this.showHeaderList){
					let elem = document.getElementById("header"+this.showHeaderList[i].index);
					if(elem && elem.classList){
						elem.classList.remove("selected_header");
						elem.className += " header";
					}
				}
		}
	}
	
	
	//when select a header from dropdown
	showInHeader = (option,index) =>{
		for(let k=0; k<this.showHeaderList.length; k++){
				let elem = document.getElementById("header"+this.showHeaderList[k].index);
				if(elem && elem.classList){
					elem.classList.remove("selected_header");
					elem.className += " header";
				}
		}
		
		let selectedOption = option;
		let spliceOption = this.showHeaderList[0];
		this.dropdownHeaderList.splice(index,1);
		this.showHeaderList.splice(0,1);
		let i;
		let j;
		this.dropdownHeaderList.push(spliceOption);
		for(i= 0;i< this.dropdownHeaderList.length;i++){
			if(this.dropdownHeaderList[i].index>spliceOption.index){
				if(i-1>=0){
						for(let k=this.dropdownHeaderList.length-1;k>i-1;k--){
							this.dropdownHeaderList[k] = this.dropdownHeaderList[k-1];
						}
						this.dropdownHeaderList[i] = spliceOption;
				}else if(i-1==-1){
					for(let k=this.dropdownHeaderList.length-1;k>i;k--){
						if(k-1!=-1){
							this.dropdownHeaderList[k] = this.dropdownHeaderList[k-1];
						}
					}
					this.dropdownHeaderList[0] = spliceOption;
				}
				break;
			}
		}
		
		this.showHeaderList.push(option);
		for(j = 0;j< this.showHeaderList.length; j++){
			if(this.showHeaderList[j].index>option.index){
				if(j-1>=0){
					for(let k=this.showHeaderList.length-1;k>j-1;k--){
						if(k-1!=-1){
							this.showHeaderList[k] = this.showHeaderList[k-1];
						}
					}
					this.showHeaderList[j] = option;
				}else if(j-1==-1){
					for(let k=this.showHeaderList.length-1;k>j-1;k--){
						if(k-1!=-1){
							this.showHeaderList[k] = this.showHeaderList[k-1];
						}
					}
					this.showHeaderList[0] = option;
				}
				break;
			}
		}
	}

}
