import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NumpadComponent } from './numpad.component';
import { EventEmitter, OnInit } from '@angular/core';

describe('NumpadComponent', () => {
  let component: NumpadComponent;
  let fixture: ComponentFixture<NumpadComponent>;
  let button: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NumpadComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NumpadComponent);
    component = fixture.componentInstance;
    button = fixture.nativeElement.querySelector('.submit-btn');
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // it('It should emit an Array of 2 Numbers', () => {
  //   spyOn(component.operationEmitter, 'emit');
  //   let n1 = component.n1;
  //   let n2 = component.n2;
  //   button.dispatchEvent(new Event('click'));
  //   fixture.detectChanges();
  //   //expect(component.operationEmitter.emit).toHaveBeenCalledWith([n1, n2]);
  //   expect(component.operationEmitter.emit).toHaveBeenCalled();
  // });

  it('It should emit an Array of 2 Numbers', () => {
    let emitted: number[] | any = null;

    component.operationEmitter.subscribe((event: number[]) => {
      emitted = event;
      button.dispatchEvent(new Event('click'));
      expect(emitted).toBe([1, 2]);
    });
  });

  it('Should return Undefined if there are no numbers', () => {
    component.n1;
    component.n2;

    const result = component.onSubmit();

    expect(result).toBeUndefined();
  });

  it('Should Emit if numbers are not undefined', () => {
    component.n1 = 1;
    component.n2 = 2;

    const result = component.onSubmit();

    expect(result).toBeUndefined();
  });
});
