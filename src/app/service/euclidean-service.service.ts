import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EuclideanServiceService {

  constructor() { }

  euclideanAlgorithm(originalA, originalB) {
    // Make input numbers positive.
    let a = Math.abs(originalA);
    let b = Math.abs(originalB);
  
    // Subtract one number from another until both numbers would become the same.
    // This will be out GCD. Also quit the loop if one of the numbers is zero.
    while (a && b && a !== b) {
      [a, b] = a > b ? [a - b, b] : [a, b - a];
    }
  
    // Return the number that is not equal to zero since the last subtraction (it will be a GCD).
    return a || b;
  }
}
