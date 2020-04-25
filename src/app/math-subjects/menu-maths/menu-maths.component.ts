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
    
    
];
  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  routeTo(routePara){
    console.log(routePara);
    
    this.router.navigateByUrl(routePara);
  }

}
