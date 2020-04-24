import {
  Component,
  OnInit
} from '@angular/core';
// import { Stack } from "../../struct/stack";
import {
  Stack
} from 'stack-typescript';
interface TruthTB {
  letter: string;
  array: any[];
  
};
@Component({
  selector: 'app-truth-table',
  templateUrl: './truth-table.component.html',
  styleUrls: ['./truth-table.component.css']
})

export class TruthTableComponent implements OnInit {

  lgate = ['∧', '∨', '→', '←→'];
 
  stackletters = new Stack < any > ();
  stackOpertors = new Stack < any > ();
  stackResult = new Stack < any > ();
  result2dTruth :TruthTB[]=[];

  value1;
  value2;

 expression="((A' ∧ b' )∧ c)"

  

  constructor() {}
  txtVal=''
  ngOnInit(): void {
    
    
  }
  onCalc()
  {

    this.stackletters = new Stack < any > ();
  this.stackOpertors = new Stack < any > ();
  this.stackResult = new Stack < any > ();
  this.result2dTruth =[];
  this.txtVal=''

    this.expression=this.expression.toLowerCase().trim();
    console.log(this.expression);
    this.searchForLetters()

    let pre;
    let current;
    for (let index = 0; this.stackResult.size != 0; index++) {
   

      if (this.lgate.indexOf(this.stackResult.top ) != -1) {
        // console.log("       ***** "+pre+this.stackResult.top+current);
        this.txtVal='('+(this.txtVal.length==0?pre:this.txtVal)+this.stackResult.top+current+')';
        // console.log(this.txtVal);
        
        this.calc(pre,current,this.stackResult.pop())
        // console.log("op "+this.stackResult.pop());
      } else {
        pre=current;
        current=(this.stackResult.pop());
      }
    }
    console.log(this.result2dTruth);
  }
  scanning()
  {
    // "((A' ∧ b' )∧ c)"
    for (let index = 0; index < this.expression.length; index++) {
      
      if (this.expression.charAt(index) === ')') {
        var a = this.stackletters.pop();
        if (this.stackletters.size > 0) {

          var b = this.stackletters.pop();
          this.stackResult.push(b);
        }
        var op = this.stackOpertors.pop();
        this.stackResult.push(a);

        this.stackResult.push(op);


      }
      if(this.isLetter( this.expression.charAt(index) ) )
      {
        
        this.stackletters.push(this.expression.charAt(index));
      }
      if( this.expression.charAt(index) === "'" )
      {
        
        let valu=this.findInArray(this.stackletters.pop())
        // valu.letter=this.stackletters.pop()+"'";
        
        this.stackResult.push(valu.letter+"'");
        this.result2dTruth.push({letter:valu.letter+"'",array:this.notValue(valu)})

      }
      if (this.lgate.indexOf(this.expression.charAt(index)) != -1) {
        this.stackOpertors.push(this.expression.charAt(index))
        

      }
      if (index == (this.expression.length - 1)) {
        var a = this.stackletters.pop();
        if (this.stackletters.size > 0) {

          var b = this.stackletters.pop();
          this.stackResult.push(b);
        }
        var op = this.stackOpertors.pop();
        this.stackResult.push(a);

        this.stackResult.push(op);

      }
      

      
    }

    let array= this.stackResult.toArray();
    this.stackResult= new Stack < any > ();
    for (let i = 0; i < array.length; i++) {
      if (array[i]!=null) {
        
        this.stackResult.push(array[i]);
        // console.log(array[i]);
        
      }
      else{
        
      }
      
      
    }
    
  }
  searchForLetters() {

    for (let index = 0; index < this.expression.length; index++) {
      // let temp=;
      if (!this.findInArray(this.expression.charAt(index))  && this.isLetter(this.expression.charAt(index))) {
        this.result2dTruth.push({letter:this.expression.charAt(index),array:[]});
        // temp.letter=this.expression.charAt(index)+"'"
        // this.result2dTruth.push({letter:this.expression.charAt(index)+"'",array:[]});

        }
      }
      this.generateTb()
      
      this.scanning()
      
      
    
    

  }
  findInArray(paraLetter)
  {
    for (const letter of this.result2dTruth) {
      if(letter.letter==paraLetter)
      {
        return letter
      }
    }
    return null;
  }
  generateTb()
  {
    let defualtBoolean=false;
    let tbSize=Math.pow(2,this.result2dTruth.length);

    for (let index = 0; index < this.result2dTruth.length; index++) {
      let temTB=this.result2dTruth[index].array;
      let mod=tbSize/Math.pow(2,(index+1));
      
      for (let index2 = 0; index2 < tbSize; index2++) {
        if( (index2)%mod==0 ){
          defualtBoolean=!defualtBoolean;
        }
        temTB[index2]=defualtBoolean;
        
      }
      
    }

  }
  
  calc(A,B,n)
  {
    let letterA=A;
    let letterB=B;
    
    
    A=this.findInArray(A);
    B=this.findInArray(B);
    // console.log(A.letter+" "+letterA);
    // console.log(B.letter+" "+letterB);
    // '∧', '∨', '∨', '←→'
      if(n==='∧'){
        this.result2dTruth.push({letter:this.txtVal,array:this.aAndB(A,B)});
      }
      else if(n==='∨'){
        this.result2dTruth.push({letter:this.txtVal,array:this.aOrB(A,B)});

      }
      else if(n==='→'){

        this.result2dTruth.push({letter:this.txtVal,array:this.ifThen(A,B)});
      }
      else{
        this.result2dTruth.push({letter:this.txtVal,array:this.ifOnlyIf(A,B)});

      }
  }
  isLetter(str) {
    return str.match(/[a-z]/i);
  }
  notValue(A) {
    let temp=[];
    for (let index = 0; index < A.array.length; index++) {
      temp[index]=(!A.array[index]);
      
    }
    console.log(A.letter+' not ='+temp);
    
    return temp;
  }

  aAndB(A, B) {
    let temp=[];
    for (let index = 0; index < A.array.length; index++) {
      temp[index]=A.array[index]&& B.array[index];
      
    }
    return temp;
  }
  aOrB(A, B) {
    let temp=[];
    for (let index = 0; index < A.array.length; index++) {
      temp[index]=A.array[index] || B.array[index];
      
    }
    return temp;
    
  }

  ifThen(A, B) {
    let temp=[];
    for (let index = 0; index < A.array.length; index++) {
      if(A[index])
      temp[index]= B.array[index];
      else
      temp[index]=true;
    }
    return temp;
    
  }

  ifOnlyIf(A, B) {
    let temp=[];
    for (let index = 0; index < A.array.length; index++) {
      if(A.array[index] === B.array[index])
      {
        temp[index]=true;
      }
      else if(!A.array[index] === !B.array[index])
      {
        temp[index]=true;
      }
      else{
        temp[index]=false;
      }
      
    }
    return temp;
    
  }

}