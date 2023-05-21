import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddChrComponent } from './add-chr.component';

describe('AddChrComponent', () => {
  let component: AddChrComponent;
  let fixture: ComponentFixture<AddChrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddChrComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddChrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
