import {
  Component,
  OnInit
} from '@angular/core';

@Component({
  selector: 'app-sequence',
  templateUrl: './sequence.component.html',
  styleUrls: ['./sequence.component.css']
})
export class SequenceComponent implements OnInit {

  txtFun1='1,2,3,4'

  solutions=''

  artTxt='1'
  dTxt='2'
  nAriTxt='10'


  geoTxt='1'
  rTxt='2'
  nGeoTxt='10'
  constructor() {}

  ngOnInit(): void {}

  determineSequenceType(arr) {
    if (arr.length < 2) {
      return; // check if the numbers in array has 1 or less. Can't compare otherwise.
    }
    // console.log(arr); // printing the sequence

    let geometricRatio = arr[arr.length - 1] / arr[arr.length - 2];
    let arithmeticDiff = arr[arr.length - 1] - arr[arr.length - 2];

    let isGeometric = true;
    let isArithmetic = true;

    for (let i = 0; i < arr.length - 1; i++) {
      let go=(Number.parseInt(arr[i]) * geometricRatio)
      let nxtVal=Number.parseInt(arr[i + 1])
      if ( go == nxtVal) {
        isGeometric = true;
        break;
      }
      else {
        isGeometric = false;
        break;
      }
    }


    for (let i = 0; i < arr.length - 1; i++) {
      let art=(Number.parseInt(arr[i ]) + arithmeticDiff)
      let nextVal=Number.parseInt(arr[i + 1])
      if ( art== nextVal) {
        isArithmetic = true;
        break;
      }
      else{
        isArithmetic = false;
        break;
      }
    }

    // 1 = Geo; 2 = Arth; 3 = Both; 4 = Neither; 
    if (isArithmetic == false && isGeometric == false) {
      this.solutions="<h4>"+("Neither Geometric or Arithmetic sequence\n")+"</h4>";
      return 4;
    }
    if (isArithmetic && isGeometric) {
      this.solutions="<h4>"+("Geometric & Arithmetic sequence\n")+"</h4>";
      return 3;
    }
    if (isArithmetic) {
      this.solutions="<h4>"+("Arithmetic sequence\n")+"</h4>";
      return 2;
    }
    if (isGeometric) {
      this.solutions="<h4>"+("Geometric sequence\n")+"</h4>";
      return 1;
    }


    

  }

  cal1()
  {
    this.solutions=''
    let arrayValues= this.txtFun1.split(',');
    console.log(arrayValues);
    
    this.findDiffOrRatio(arrayValues)
  }
  cal2()
  {
    this.solutions=''
   
    this.solutions='<h4>the Arithmtic n term = '+this.findArthTerm(Number.parseInt(this.artTxt),Number.parseInt(this.dTxt),Number.parseInt(this.nAriTxt))+"</h4>"
  }

  cal3()
  {
    this.solutions=''
   
    this.solutions='<h4>the n term ='+this.findGeoTerm(Number.parseInt(this.geoTxt),Number.parseInt(this.rTxt),Number.parseInt(this.nGeoTxt))+"</h4>"
  }

  findDiffOrRatio(arr) {
    var seqType = this.determineSequenceType(arr);
    var value;

    switch (seqType) {
      case 1:
        value = this.findRatio(arr);
        break;

      case 2:
        value = this.findDiff(arr);
        break;

      case 3:
        value = this.findDiff(arr); // if the type is both, use arthemetic (it's always either (0 or 1))
        break;

      case 4:
        this.solutions="<h4>"+("The function doesn't have common ratio or common difference!")+"</h4>";

        break;

      default:
        this.solutions="<h4>"+("Not a sequence!")+"</h4>";

        break;
    }

    // console.log(value);
    // console.log("===============");

    return value;
  }

  findRatio(arr) {
    var geometricRatio = arr[arr.length - 1] / arr[arr.length - 2];
    return geometricRatio;
  }

  findDiff(arr) {
    var arithmeticDiff = arr[arr.length - 1] - arr[arr.length - 2];
    return arithmeticDiff;
  }

  findArthTerm(a1, d, an) {
    var nthTerm = a1 + (an - 1) * d;

    console.log(nthTerm);
    console.log("==================");


    return nthTerm;
  }

  
  findGeoTerm(a1, r, an) {
    var nthTerm = a1 * Math.pow(r, an - 1);

    // console.log(nthTerm);
    // console.log("==================");


    return nthTerm;
  }

  //print all terms
  findNthArithTerms(a1, d, numTerms) {
    var nthTerms;

    var terms = [];

    for (let i = 0; i < numTerms; i++) {
        nthTerms = a1 + ((i + 1) - 1) * d;
        terms.push(nthTerms);
    }

    // console.log(terms);
    // console.log("==================");


    return terms;
}


//print all terms
findNthGeoTerms(a1, r, numTerms) {
  var nthTerms;

  var terms = [];

  for (let i = 0; i < numTerms; i++) {
      nthTerms = a1 * Math.pow(r, (i + 1) - 1);
      terms.push(nthTerms);
  }

  console.log(terms);
  console.log("==================");


  return terms;
}

}