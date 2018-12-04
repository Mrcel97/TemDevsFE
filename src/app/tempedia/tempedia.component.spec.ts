import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TempediaComponent } from './tempedia.component';

describe('TempediaComponent', () => {
  let component: TempediaComponent;
  let fixture: ComponentFixture<TempediaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TempediaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TempediaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
