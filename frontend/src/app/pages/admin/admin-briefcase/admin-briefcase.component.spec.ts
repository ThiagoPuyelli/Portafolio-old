import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminBriefcaseComponent } from './admin-briefcase.component';

describe('AdminBriefcaseComponent', () => {
  let component: AdminBriefcaseComponent;
  let fixture: ComponentFixture<AdminBriefcaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminBriefcaseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminBriefcaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
