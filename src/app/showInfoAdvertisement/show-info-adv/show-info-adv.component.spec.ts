import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowInfoADVComponent } from './show-info-adv.component';

describe('ShowInfoADVComponent', () => {
  let component: ShowInfoADVComponent;
  let fixture: ComponentFixture<ShowInfoADVComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowInfoADVComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowInfoADVComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
