import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TournamentTeamFormComponent } from './tournament-team-form.component';

describe('TournamentTeamFormComponent', () => {
  let component: TournamentTeamFormComponent;
  let fixture: ComponentFixture<TournamentTeamFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TournamentTeamFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TournamentTeamFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
