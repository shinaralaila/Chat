import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HiddenusersComponent } from './hiddenusers.component';

describe('HiddenusersComponent', () => {
  let component: HiddenusersComponent;
  let fixture: ComponentFixture<HiddenusersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HiddenusersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HiddenusersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
