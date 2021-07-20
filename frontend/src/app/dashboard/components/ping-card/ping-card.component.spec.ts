import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PingCardComponent } from './ping-card.component';

describe('PingCardComponent', () => {
  let component: PingCardComponent;
  let fixture: ComponentFixture<PingCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PingCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PingCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
