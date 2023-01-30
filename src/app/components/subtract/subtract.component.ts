import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-subtract',
  templateUrl: './subtract.component.html',
  styleUrls: ['./subtract.component.scss'],
})
export class SubtractComponent implements OnInit {
  constructor() {}
  result: number;

  ngOnInit(): void {}

  operation(n1: any) {
    console.log('Resta ', n1);
    this.result = n1[0] - n1[1];
  }
}
