import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  array2d=[]
  arrayNormal='';
  constructor() { }

  ngOnInit(): void {

  }
  cal(){
    let ar= this.arrayNormal.split(';')
    // console.log(ar);
    
    for (let index = 0; index < ar.length; index++) {
      let val=ar[index]+""
      this.array2d[index]=val.split(',')
      
    }
    console.log(this.array2d);
    
  }

}
