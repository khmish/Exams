import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-stat-sub-normal',
  templateUrl: './stat-sub-normal.component.html',
  styleUrls: ['./stat-sub-normal.component.css']
})
export class StatSubNormalComponent implements OnInit {

  @ViewChild('xValue') xValue : ElementRef;
  @ViewChild('uValue') uValue : ElementRef;
  @ViewChild('aValue') aValue : ElementRef;
  @ViewChild('nValue') nValue : ElementRef;
  @ViewChild('solution') solution : any;
 

  result;

  constructor() { }

  ngOnInit(): void {
  }

  calculate()
  {
    
    this.result=(this.xValue.nativeElement.value-this.uValue.nativeElement.value)/(this.aValue.nativeElement.value/Math.sqrt(this.nValue.nativeElement.value))
    
    
    this.solution.nativeElement.innerHTML="P(Z<= ("+this.xValue.nativeElement.value+"-"+this.uValue.nativeElement.value+")/("+this.aValue.nativeElement.value+"/Math.sqrt("+this.nValue.nativeElement.value+")))"
    this.solution.nativeElement.innerHTML+="="+this.result;
  }
}
