import { Component, OnInit } from '@angular/core';
// import { Stack } from "../../struct/stack";
@Component({
  selector: 'app-truth-table',
  templateUrl: './truth-table.component.html',
  styleUrls: ['./truth-table.component.css']
})
export class TruthTableComponent implements OnInit {

  selectArray=[
    {number:1, name:'P'},
    {number:2, name:'p ,q'},
    {number:3, name:'p ,q ,r'},
    {number:4, name:'p ,q ,r ,s'},
  ];
  logicGate=[
    {number:1, name:'And', symbol:'∧'},
    {number:1, name:'Or', symbol:'∨'},
    {number:1, name:'If Then', symbol:'→'},
    {number:1, name:'If only If', symbol:'←→'},
  ];
  letters;
  truthArrayLetters=[
    [],
    [],
    [],
    [],
];
  constructor(/*private stackOb :Stack*/) { }

  ngOnInit(): void {
    // this.calculate();
  }

  generateTruth()
  {
    
    let newVal=Math.pow(2,this.letters)
    this.truthArrayLetters[0]=[];
    this.truthArrayLetters[1]=[];
    this.truthArrayLetters[2]=[]
    this.truthArrayLetters[3]=[]

    var a= this.truthArrayLetters[0];
      var b= this.truthArrayLetters[1];
      var c= this.truthArrayLetters[2];
      var d= this.truthArrayLetters[3];
    
    if(newVal===2)
    {
      
      this.gTruth(a,newVal,1);

    }
    else if(newVal===4)
    {
      
      this.gTruth(a,newVal,2);
      this.gTruth(b,newVal,1);
     
    }
    else if(newVal===8)
    {
      
      
      this.gTruth(a,newVal,4);
      this.gTruth(b,newVal,2);
      this.gTruth(c,newVal,1);      
    }
    else if(newVal===16)
    {
      
      this.gTruth(a,newVal,8);
      this.gTruth(b,newVal,4);
      this.gTruth(c,newVal,2);      
      this.gTruth(d,newVal,1);      
    }
    // console.log(this.truthArrayLetters);
    
  }

  gTruth(a,n, m)
  {
    let valT=false;
    for (let index = 0; index < n; index++) {
      if(index%(m)==0)
      {
        valT=!valT;
      }
      a[index]=valT;
      
    }

  }


  notValue(A)
  {
    return !A;
  }

  aAndB(A, B)
  {
    return A && B; 
  }
  aOrB(A, B)
  {
    return A || B; 
  }

  ifThen(A, B) {
    if (A) {
      return B;
    } else {
      
      return true;
    }
  }

  ifOnlyIf(A, B) {
    if (A === B) {
      return true;
    } 
    else if (!A === !B){
      return true;
    }
    else{
      return false;
    }
  }
  calculate()
  {
    // this.stackOb.push('a');
    // console.log(this.stackOb.peek());
    // ;
  }

}
