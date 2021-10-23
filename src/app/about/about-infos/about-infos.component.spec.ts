import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutInfosComponent } from './about-infos.component';

describe('AboutInfosComponent', () => {
  let component: AboutInfosComponent;
  let fixture: ComponentFixture<AboutInfosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutInfosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutInfosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
