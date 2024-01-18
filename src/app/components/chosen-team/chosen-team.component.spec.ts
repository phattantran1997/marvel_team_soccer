import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChosenTeamComponent } from './chosen-team.component';

describe('ChosenTeamComponent', () => {
  let component: ChosenTeamComponent;
  let fixture: ComponentFixture<ChosenTeamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChosenTeamComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChosenTeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
