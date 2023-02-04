import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DivideComponent } from './divide.component';

describe('DivideComponent', () => {
  let component: DivideComponent;
  let fixture: ComponentFixture<DivideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DivideComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DivideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Should Divide the numbers in the array correctly', () => {
    let numbers = [1, 2];
    let result = component.operation(numbers);
    let res = numbers[0] / numbers[1];

    expect(res).toEqual(component.result);
  });

  it('Should Not be allowed to Divide by Zero(0)', () => {
    let numbers = [1, 0];
    let result = component.operation(numbers);
    let res = numbers[0] / numbers[1];

    expect(result).toBeFalsy();
  });
});
