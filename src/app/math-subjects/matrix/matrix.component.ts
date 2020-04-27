import { Component, OnInit } from '@angular/core';

import { Matrix, inverse, determinant } from 'ml-matrix';
import { from } from 'rxjs';


@Component({
  selector: 'app-matrix',
  templateUrl: './matrix.component.html',
  styleUrls: ['./matrix.component.css']
})
export class MatrixComponent implements OnInit {

  
  solutions=''
  solutionsA=''
  solutionsB=''
  radioValue=''

  txt1='4,7;2,6';
  txt2='4,7;2,6';

  array1=[];
  array2=[];

  A;
  B;

  constructor() { }

  ngOnInit(): void {
    

    
    
  }
  cal()
  {
console.log(this.radioValue);

    if(this.txt1 && this.txt2){

      this.A=this.fun('A',this.txt1)
      
        this.B=this.fun('B',this.txt2)
      
      if(this.A && this.B)
      {
        if(this.radioValue=='add'){

          let c=Matrix.add(this.A, this.B);
          this.solutions=this.printResult(c)
        }
        else if(this.radioValue=='sub')
        {
          let c=Matrix.sub(this.A, this.B);
          this.solutions=this.printResult(c)
        }
        else if(this.radioValue=='mul')
        {
          let c=this.A.mmul(this.B);
          this.solutions=this.printResult(c)
        }
       
        else if(this.radioValue=='tran')
        {
          this.solutionsB=""

          let c=this.A.transpose();
          this.solutions=this.printResult(c)
        }
        else
        {
          this.solutionsB=""
          console.log(this.A);
          
          let c=determinant(this.A);
          // console.log(c);
          
          this.solutions="<h4>Result = "+c+"</h4>"
        }
        
      }
    }
    
  }
  onKey1(event){
    // console.log(event.key=="Enter");
    
    if(event.key=="Enter")
    this.A=this.fun('A',this.txt1)
  
  }
  onKey2(event){
    if(event.key=="Enter")
    this.B=this.fun('B',this.txt2)
    
  }

  fun(a,txt)
  {
    
    let result='<h4>'+a+' = <br>'

    // console.log(event);
    
    let ar=txt.split(';');

    for (let index = 0; index < ar.length; index++) {
      this.array1[index]=ar[index].split(',');
      
    }
    var A = new Matrix(this.array1);
    result+='<div class="col-3">'
    result+='<table class="table text-white">'

    for (let index1 = 0; index1 < A.rows; index1++) {
      result+='<tr>'
      for (let index2 = 0; index2 < A.columns; index2++) 
            result+="<td>"+A.get(index1,index2)+"</td>";
      
            result+='</tr>'
      
    }
    
    result+='</table>'
    result+='</div></h4>'
  

    console.log(a);
    
    if(a ==='A')
    {
      this.solutionsA=''
      this.solutionsA=result
    }else
    {
      this.solutionsB=''
      this.solutionsB=result
    }
    return A;
    
  }

  printResult(A)
  {
    let result='<h4> Result = <br>'
    result+='<div class="col-3">'
    result+='<table class="table text-white">'

    for (let index1 = 0; index1 < A.rows; index1++) {
      result+='<tr>'
      for (let index2 = 0; index2 < A.columns; index2++) 
            result+="<td>"+A.get(index1,index2)+"</td>";
      
            result+='</tr>'
      
    }
    
    result+='</table>'
    result+='</div></h4>'

    return result;
  }
}
