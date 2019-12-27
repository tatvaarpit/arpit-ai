import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HitsListingComponent } from './hits-listing.component';

describe('HitsListingComponent', () => {
  let component: HitsListingComponent;
  let fixture: ComponentFixture<HitsListingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HitsListingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HitsListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
