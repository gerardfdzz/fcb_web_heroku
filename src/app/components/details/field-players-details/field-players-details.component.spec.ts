import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FieldPlayersDetailsComponent } from './field-players-details.component';

describe('FieldPlayersDetailsComponent', () => {
  let component: FieldPlayersDetailsComponent;
  let fixture: ComponentFixture<FieldPlayersDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FieldPlayersDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FieldPlayersDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
