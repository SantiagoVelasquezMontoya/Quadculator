import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Should toggle the Boolean variable', () => {
    let cubeMode: boolean = component.cubeMode;
    component.cubeMode = false;
    //let button = fixture.nativeElement.querySelector('.checkmark');

    component.toggleMode();
    //button.click();
    // fixture.detectChanges();

    expect(component.cubeMode).toBeTruthy();
  });
});
