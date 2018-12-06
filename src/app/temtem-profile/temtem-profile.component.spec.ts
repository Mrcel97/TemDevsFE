import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TemtemProfileComponent } from './temtem-profile.component';

describe('TemtemProfileComponent', () => {
  let component: TemtemProfileComponent;
  let fixture: ComponentFixture<TemtemProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemtemProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemtemProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
