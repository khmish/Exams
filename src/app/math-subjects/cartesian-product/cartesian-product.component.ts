import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cartesian-product',
  templateUrl: './cartesian-product.component.html',
  styleUrls: ['./cartesian-product.component.css']
})
export class CartesianProductComponent implements OnInit {

  sA='a,4,7'
  sB='c,5,g'
  solutions='';
  constructor() { }

  ngOnInit(): void {
  }
  calculate()
  {
    this.solutions =''
    let set_A=this.sA.split(',')
    let set_B=this.sB.split(',')
    let setResult=(this.cartesianProduct(set_A, set_B));
    
    
    this.solutions +="<H4> Result ={"
    for (let index = 0; index < setResult.length; index++) {
      this.solutions +="  ["+ setResult[index]+"] ";
      if(index<setResult.length-1)
      this.solutions +=","
    }
    this.solutions +="}</H4> "
  }
  cartesianProduct(setA, setB) {
    // Check if input sets are not empty.
    // Otherwise return null since we can't generate Cartesian Product out of them.
    if (!setA || !setB || !setA.length || !setB.length) {
      return null;
    }
  
    // Init product set.
    const product = [];
  
    // Now, let's go through all elements of a first and second set and form all possible pairs.
    for (let indexA = 0; indexA < setA.length; indexA += 1) {
      for (let indexB = 0; indexB < setB.length; indexB += 1) {
        // Add current product pair to the product set.
        product.push([setA[indexA], setB[indexB]]);
      }
    }
  
    // Return cartesian product set.
    return product;
  }


}
