import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FounderInfoComponent } from './founder-info.component';

describe('FounderInfoComponent', () => {
  let component: FounderInfoComponent;
  let fixture: ComponentFixture<FounderInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FounderInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FounderInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
