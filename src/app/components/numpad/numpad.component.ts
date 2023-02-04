import { Component, OnInit } from '@angular/core';
import { Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-numpad',
  templateUrl: './numpad.component.html',
  styleUrls: ['./numpad.component.scss'],
})
export class NumpadComponent implements OnInit {
  regex: RegExp = new RegExp(/^[0-9]+/);
  n1: number;
  n2: number;
  @Input() buttonText: string;
  @Input() result: any;
  @Input() title: string;
  @Input() buttonColor: string;
  @Output() operationEmitter: EventEmitter<number[]> = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}

  onSubmit() {
    if (!this.n1 || !this.n2) {
      alert('Fill all the numbers');
      return;
    }
    this.operationEmitter.emit([this.n1, this.n2]);
  }

  
}
