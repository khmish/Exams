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
  zVal='-2.2';
  nVal='0.07';

  table2d=this.tabl.getTable()

  refresh=true;
  ngOnInit(): void {

   
    
  }
  find()
  {
    this.table2d=[]
    this.refresh=false;
    this.table2d=this.tabl.getTable()
    this.refresh=true;
    

    console.log(this.zVal);

    this.solutions="<h4>"
    let cel=this.tabl.getCel(this.zVal,this.nVal);
    
    this.solutions+="Result = "+(cel)+"</h4>";
    let calNval=Number.parseInt((Number.parseFloat(this.nVal)*100)+"")
    let x=document.getElementById(this.zVal+""+calNval);
    console.log(this.zVal.indexOf('.')==-1);
    if(this.zVal.indexOf('.')==-1)
    {
      // console.log();
      console.log(this.zVal+".0"+calNval);
      
      x=document.getElementById(this.zVal+".0"+calNval);

    }else
    {
      x=document.getElementById(this.zVal+""+calNval);
    }
    
    let temp =x.innerHTML;
    document.getElementById(this.zVal+""+calNval).innerHTML="<h5 style='background-color: red'>"+temp+"</h5>"
    console.log(x);
    
    x=null;
    
  }

  generateTable()
  {
    
  }

}
