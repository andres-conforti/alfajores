import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputCantidad } from './input-cantidad.component';

describe('InputCantidad', () => {
  let component: InputCantidad;
  let fixture: ComponentFixture<InputCantidad>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputCantidad ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InputCantidad);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
