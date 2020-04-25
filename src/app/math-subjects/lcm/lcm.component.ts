import { Component, OnInit } from '@angular/core';
import {EuclideanServiceService} from '../../service/euclidean-service.service'
import {PrimeServiceService} from '../../service/prime-service.service'
@Component({
  selector: 'app-lcm',
  templateUrl: './lcm.component.html',
  styleUrls: ['./lcm.component.css']
})
export class LCMComponent implements OnInit {

  sA='400'
  sB='600'
  solutions='';

  constructor(private euclidean:EuclideanServiceService, private primeFact:PrimeServiceService) { }
  
  ngOnInit(): void {
    // console.log(" lcm(400,600) "+this.leastCommonMultiple(400, 600));
    
  }
  calculate(){
    this.solutions="<h4> lcm("+this.sA+","+this.sB+") = <br>"
    this.solutions+="("+this.sA +"*"+ this.sB +")/  gcd("+this.sA+","+this.sB+") ="+this.leastCommonMultiple(this.sA, this.sB)+" <br>"
    this.solutions+="prime Factor for "+this.sA+" ={"+this.primeFact.primeFatoriztion(this.sA)+"} <br>"
    this.solutions+="prime Factor for "+this.sB+" ={"+this.primeFact.primeFatoriztion(this.sB)+"} <br>"
    this.solutions+="</h4>"
  }

  leastCommonMultiple(a, b) {
     
    return ((a === 0) || (b === 0)) ? 0 : Math.abs(a * b) / this.euclidean.euclideanAlgorithm(a, b);
  }
}
