import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewqueryComponent } from './viewquery.component';

describe('ViewqueryComponent', () => {
  let component: ViewqueryComponent;
  let fixture: ComponentFixture<ViewqueryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewqueryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewqueryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
