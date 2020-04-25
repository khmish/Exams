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


  constructor() {}

  ngOnInit(): void {
    
    
  }
  
}