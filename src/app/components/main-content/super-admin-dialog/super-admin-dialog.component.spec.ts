import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperAdminDialogComponent } from './super-admin-dialog.component';

describe('SuperAdminDialogComponent', () => {
  let component: SuperAdminDialogComponent;
  let fixture: ComponentFixture<SuperAdminDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuperAdminDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SuperAdminDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
