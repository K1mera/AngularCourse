import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GifCardsComponent } from './gif-cards.component';

describe('GifCardsComponent', () => {
  let component: GifCardsComponent;
  let fixture: ComponentFixture<GifCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GifCardsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GifCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
