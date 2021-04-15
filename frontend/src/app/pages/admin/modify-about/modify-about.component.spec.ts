import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifyAboutComponent } from './modify-about.component';

describe('ModifyAboutComponent', () => {
  let component: ModifyAboutComponent;
  let fixture: ComponentFixture<ModifyAboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifyAboutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifyAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
