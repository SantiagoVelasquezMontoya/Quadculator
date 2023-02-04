import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlusComponent } from './plus.component';

describe('PlusComponent', () => {
  let component: PlusComponent;
  let fixture: ComponentFixture<PlusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PlusComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Should Add the numbers in the array correctly', () => {
    let numbers = [1, 2];
    let result = component.operation(numbers);
    let res = numbers[0] + numbers[1];

    expect(res).toEqual(component.result);
  });
});
