import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultAVGComponent } from './result-avg.component';

describe('ResultAVGComponent', () => {
  let component: ResultAVGComponent;
  let fixture: ComponentFixture<ResultAVGComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResultAVGComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultAVGComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
