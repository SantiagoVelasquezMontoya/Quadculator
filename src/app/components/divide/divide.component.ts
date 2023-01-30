import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-divide',
  templateUrl: './divide.component.html',
  styleUrls: ['./divide.component.scss'],
})
export class DivideComponent implements OnInit {
  result: number;
  constructor() {}

  ngOnInit(): void {}
  operation(n1: any) {
    console.log('Divide', n1);
    this.result = n1[0] / n1[1];
  }
}
