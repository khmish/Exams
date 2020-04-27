import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu-maths',
  templateUrl: './menu-maths.component.html',
  styleUrls: ['./menu-maths.component.css']
})
export class MenuMathsComponent implements OnInit {

  menuItems= [
    {name:'Truth Table', route:'maths/truthTable'},
    {name:'Power Sets', route:'maths/powerSets'},
    {name:'Prime', route:'maths/prime'},
    {name:'Cartesian Product', route:'maths/cartesianProduct'},
    {name:'Matrix', route:'maths/Matrix'},
    {name:'Sequence', route:'maths/Sequence'},
    {name:'GCD Euclidean', route:'maths/GCD_Euclidean'},
    {name:'LCM', route:'maths/LCM'},
    
    
];
  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  routeTo(routePara){
    console.log(routePara);
    
    this.router.navigateByUrl(routePara);
  }

  onButtonGroupClick($event){
    let clickedElement = $event.target || $event.srcElement;

    if( clickedElement.nodeName === "BUTTON" ) {

      let isCertainButtonAlreadyActive = clickedElement.parentElement.querySelector(".active");
      // if a Button already has Class: .active
      if( isCertainButtonAlreadyActive ) {
        isCertainButtonAlreadyActive.classList.remove("active");
      }

      clickedElement.className += " active";
    }

  }
}
