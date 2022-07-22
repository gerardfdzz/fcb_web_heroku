import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoalkeepersDetailsComponent } from './goalkeepers-details.component';

describe('GoalkeepersDetailsComponent', () => {
  let component: GoalkeepersDetailsComponent;
  let fixture: ComponentFixture<GoalkeepersDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GoalkeepersDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GoalkeepersDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
