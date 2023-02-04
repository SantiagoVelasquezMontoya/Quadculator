import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiplyComponent } from './multiply.component';

describe('MultiplyComponent', () => {
  let component: MultiplyComponent;
  let fixture: ComponentFixture<MultiplyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MultiplyComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MultiplyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Should Multiply the numbers in the array correctly', () => {
    let numbers = [1, 2];
    let result = component.operation(numbers);
    let res = numbers[0] * numbers[1];

    expect(res).toEqual(component.result);
  });
});
