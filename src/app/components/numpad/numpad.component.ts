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
  @Output() operationEmitter: EventEmitter<number[]> = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}

  onSubmit() {
    this.operationEmitter.emit([this.n1, this.n2]);
  }

  onInput() {}
}