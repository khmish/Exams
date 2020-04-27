import { Component, OnInit } from '@angular/core';

import { Matrix } from 'ml-matrix';
import { from } from 'rxjs';

@Component({
  selector: 'app-matrix',
  templateUrl: './matrix.component.html',
  styleUrls: ['./matrix.component.css']
})
export class MatrixComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
    var A = new Matrix([[1, 1], [2, 2]]);

    console.log(A);
    
  }

}
