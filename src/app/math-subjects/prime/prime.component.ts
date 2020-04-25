import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-prime',
  templateUrl: './prime.component.html',
  styleUrls: ['./prime.component.css']
})
export class PrimeComponent implements OnInit {


  solutions;
  numberTxt;
  primeNumbers = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97,
    101, 103, 107, 109, 113, 127, 131, 137, 139, 149, 151, 157, 163, 167, 173, 179, 181, 191, 193, 197, 199,
    211, 223, 227, 229, 233, 239, 241, 251, 257, 263, 269, 271, 277, 281, 283, 293, 307, 311, 313, 317, 331,
    337, 347, 349, 353, 359, 367, 373, 379, 383, 389, 397, 401, 409, 419, 421, 431, 433, 439, 443, 449, 457,
    461, 463, 467, 479, 487, 491, 499, 503, 509, 521, 523
  ];
  constructor() { }

  ngOnInit(): void {
    console.log(this.solutions);
    
  }

  calculate()
  {
    this.isPrime(this.numberTxt)
  }
  isPrime(number) {
    //Array for first 100 prime numbers:
    this.solutions="";
    let flag = true;
    let count=0;
    if (number % 1 != 0) {
        alert("The number " + number + " is not an integer!");
        return;
    }

    // Take the root of  number and remove decimals
    let root = Math.sqrt(number);
    if (root % 1 != 0){

      root =Number.parseInt(Math.sqrt(number).toFixed(3)) ;
    }

    let numRoot = Math.floor(root);

    if (numRoot >= 2) {
        //Create array of primes up to numRoot and string to print
        let uptoArrPrime = [];
        let primes = "";

        // Take the prime numbers up to the numRoot from primeNumbers Array
        for (let i = 0; i < this.primeNumbers.length; i++) {
            if (numRoot >= this.primeNumbers[i]) {
                uptoArrPrime.push(this.primeNumbers[i]);
                primes += this.primeNumbers[i] + ", ";
            }
        }

        // Divide each of the up to prime numbers to the number to check if it's prime
        let divisibleBy;
        for (let index in uptoArrPrime) {
            if (number % uptoArrPrime[index] == 0) {
                divisibleBy = uptoArrPrime[index];
                flag = false;
                break;
            }
        }

        // Write down the steps
        this.solutions+="<h4>step "+(++count)+":  "+("Take the root of " + number + " = " + root)+"</h4>"+"<br>";
        this.solutions+="<h4>step "+(++count)+":  "+("Take the prime numbers up to " + numRoot)+"</h4>"+"<br>";
        this.solutions+="<h4>step "+(++count)+":  "+("Prime numbers up to " + numRoot + " are: " + primes)+"</h4>"+"<br>";
        divisibleBy?this.solutions+="<h4>step "+(++count)+":  "+("The number " + number + " is divisable by: " + divisibleBy)+"</h4>"+"<br>":this.solutions+="<h4>step "+(++count)+":  "+("is not divisable by any prime")+"</h4>"+"<br>";
        ;

        if (flag == true)
            this.solutions+="<h4>step "+(++count)+":  "+(number + " is prime")+"</h4>"+"<br>";
        else
            this.solutions+="<h4>step "+(++count)+":  "+(number + " is not prime")+"</h4>"+"<br>";
    } else if (number <= 1) {
        this.solutions+="<h4>step "+(++count)+":  "+("1, 0 and negative numbers are neither prime nor composite")+"</h4>"+"<br>";
    } else {
        this.solutions+="<h4>step "+(++count)+":  "+("The number " + number + " is a prime number")+"</h4>"+"<br>";
        this.solutions+="<h4>step "+(++count)+":  "+("Because the only numbers divisible for are 1 and " + number)+"</h4>"+"<br>";
    }
}
}
