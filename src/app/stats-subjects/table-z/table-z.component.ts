import { Component, OnInit } from '@angular/core';
import { NtableService } from 'src/app/service/ntable.service';

@Component({
  selector: 'app-table-z',
  templateUrl: './table-z.component.html',
  styleUrls: ['./table-z.component.css']
})
export class TableZComponent implements OnInit {

  constructor(private tabl:NtableService) { }
  
  tab;
  solutions="";
  zVal='–2.2';
  nVal='0.07';
  ngOnInit(): void {

    this.generateTable()

    // let array = this.tabl.getTable();
    // console.log(array);

    // let cel = this.tabl.getCel('3.4','0.09');
    // console.log(cel);
    
  }
  find()
  {
    this.tab=''
    this.generateTable()
    this.solutions="<h4>"
    let cel=this.tabl.getCel(this.zVal,this.nVal);

    let calNval=Number.parseInt((Number.parseFloat(this.nVal)*100)+"")
    let x=document.getElementsByClassName(this.zVal+""+calNval)[0];
    let temp =x.innerHTML;
    document.getElementsByClassName(this.zVal+""+calNval)[0].innerHTML="<h5 style='background-color: red'>"+temp+"</h5>"
    console.log(x);
    
    this.solutions+="Result = "+(cel)+"</h4>";
    x=null;
    
  }

  generateTable()
  {
    this.tab='<table class="table table-hover  table-bordered">'
    this.tab+='<thead><tr>'
    this.tab+='<th scope="col">Z</th>'
    this.tab+='<th scope="col">0.00</th>'
    this.tab+='<th scope="col">0.01</th>'
    this.tab+='<th scope="col">0.02</th>'
    this.tab+='<th scope="col">0.03</th>'
    this.tab+='<th scope="col">0.04</th>'
    this.tab+='<th scope="col">0.05</th>'
    this.tab+='<th scope="col">0.06</th>'
    this.tab+='<th scope="col">0.07</th>'
    this.tab+='<th scope="col">0.08</th>'
    this.tab+='<th scope="col">0.09</th>'
    
    this.tab+='</tr>'
    this.tab+='</thead>'
    for (let index = 0; index < this.tabl.getTable().length; index++) {
      this.tab+='<tr>';
      
      this.tab+='<td>' +this.tabl.getTable()[index].z +"</td>";

      for (let indexj = 0; indexj < this.tabl.getTable()[index].array.length; indexj++) {
        this.tab+='<td class="'+this.tabl.getTable()[index].z+indexj+'">' +this.tabl.getTable()[index].array[indexj]+"</td>";
        
      }
      this.tab+='</tr>'
      
    }
    this.tab+='</table>'
  }

}
