import { Component, OnInit } from '@angular/core';
import {EuclideanServiceService} from '../../service/euclidean-service.service'
@Component({
  selector: 'app-lcm',
  templateUrl: './lcm.component.html',
  styleUrls: ['./lcm.component.css']
})
export class LCMComponent implements OnInit {

  constructor(private euclidean:EuclideanServiceService) { }

  ngOnInit(): void {
  }

  leastCommonMultiple(a, b) {
    return ((a === 0) || (b === 0)) ? 0 : Math.abs(a * b) / this.euclidean.euclideanAlgorithm(a, b);
  }
}
