import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu-stats',
  templateUrl: './menu-stats.component.html',
  styleUrls: ['./menu-stats.component.css']
})
export class MenuStatsComponent implements OnInit {

  menuItems= [
    {name:'Normal distribution', route:'stats/normal'},
    {name:'Fundamental Sampling', route:'stats/fundamental'},
];
  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  routeTo(routePara){
    console.log(routePara);
    
    this.router.navigateByUrl(routePara);
  }

}
