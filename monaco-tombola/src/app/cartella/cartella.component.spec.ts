import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartellaComponent } from './cartella.component';

describe('CartellaComponent', () => {
  let component: CartellaComponent;
  let fixture: ComponentFixture<CartellaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CartellaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CartellaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
