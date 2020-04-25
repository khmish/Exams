import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-euclidean-gcd',
  templateUrl: './euclidean-gcd.component.html',
  styleUrls: ['./euclidean-gcd.component.css']
})
export class EuclideanGCDComponent implements OnInit {

  sA='400'
  sB='600'
  solutions='';

  steps=[]
  constructor() { }

  ngOnInit(): void {
  }

  calculate(){
    this.steps=[]
    this.solutions="<h4> ";
    let result=this.euclideanAlgorithm(this.sA,this.sB);

    for (let index = 0; index < this.steps.length; index++) {
      
      this.solutions+=(index+1)+") "+this.steps[index].expression+"<br>"
      
    }
    
    this.solutions+="gcd("+this.sA+","+this.sB+") = "+result+"</h4>"

  }

  euclideanAlgorithm(originalA, originalB) {
    // Make input numbers positive.
    let a = Math.abs(originalA);
    let b = Math.abs(originalB);
  
    // Subtract one number from another until both numbers would become the same.
    // This will be out GCD. Also quit the loop if one of the numbers is zero.
    while (a && b && a !== b) {
      [a, b] = a > b ? [a - b, b] : [a, b - a];
      this.steps.push({value:a > b ? [a - b, b] : [a, b - a],expression:a > b ?a+" - "+b +" = "+b:b+" - "+a +" = "+a})
    }
  
    // Return the number that is not equal to zero since the last subtraction (it will be a GCD).
    return a || b;
  }

}
