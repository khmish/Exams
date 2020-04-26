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
    let tm=Math.abs(Number.parseInt(this.sA)-Number.parseInt(this.sB))
    this.solutions+=this.sA>this.sB?"1) "+this.sA+" - "+this.sB+" ="+(tm)+"<br>":"1) "+this.sB+" - "+this.sA+" = "+(tm)+"<br>"
    for (let index = 0; index < this.steps.length; index++) {
      
      this.solutions+=(index+2)+") "+this.steps[index].expression+"<br>"
      
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
      this.steps.push({value:a > b ? [a - b, b] : [a, b - a],expression:a > b ?a+" - "+b +" = "+(a - b):b+" - "+a +" = "+(b - a)})
    }
  
    // Return the number that is not equal to zero since the last subtraction (it will be a GCD).
    return a || b;
  }

}
