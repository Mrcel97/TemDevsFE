import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TemtemEntryComponent } from './temtem-entry.component';

describe('TemtemEntryComponent', () => {
  let component: TemtemEntryComponent;
  let fixture: ComponentFixture<TemtemEntryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemtemEntryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemtemEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
