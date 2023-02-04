import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidatorFieldComponent } from './validator-field.component';

describe('ValidatorFieldComponent', () => {
  let component: ValidatorFieldComponent;
  let fixture: ComponentFixture<ValidatorFieldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ValidatorFieldComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ValidatorFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
