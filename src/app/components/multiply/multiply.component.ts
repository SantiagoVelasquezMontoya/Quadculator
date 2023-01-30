import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-multiply',
  templateUrl: './multiply.component.html',
  styleUrls: ['./multiply.component.scss'],
})
export class MultiplyComponent implements OnInit {
  result: number;
  constructor() {}

  ngOnInit(): void {}

  operation(n1: any) {
    console.log('Multiply', n1);
    this.result = n1[0] * n1[1];
  }
}
