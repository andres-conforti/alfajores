import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlfajoresListComponent } from './alfajores-list.component';

describe('AlfajoresListComponent', () => {
  let component: AlfajoresListComponent;
  let fixture: ComponentFixture<AlfajoresListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlfajoresListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlfajoresListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
