import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResturantBackgroundComponent } from './resturant-background.component';

describe('ResturantBackgroundComponent', () => {
  let component: ResturantBackgroundComponent;
  let fixture: ComponentFixture<ResturantBackgroundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResturantBackgroundComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResturantBackgroundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
