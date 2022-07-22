import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardsGoalkeepersComponent } from './cards-goalkeepers.component';

describe('CardsGoalkeepersComponent', () => {
  let component: CardsGoalkeepersComponent;
  let fixture: ComponentFixture<CardsGoalkeepersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardsGoalkeepersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardsGoalkeepersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
