import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardsFieldPlayersComponent } from './cards-field-players.component';

describe('CardsFieldPlayersComponent', () => {
  let component: CardsFieldPlayersComponent;
  let fixture: ComponentFixture<CardsFieldPlayersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardsFieldPlayersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardsFieldPlayersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
