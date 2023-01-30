import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-plus',
  templateUrl: './plus.component.html',
  styleUrls: ['./plus.component.scss'],
})
export class PlusComponent implements OnInit {
  constructor() {}
  result: number;
  ngOnInit(): void {}

  operation(n1: any) {
    console.log('Sumando', n1);
    this.result = n1[0] + n1[1];
  }
}
