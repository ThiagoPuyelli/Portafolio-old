import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifySkillComponent } from './modify-skill.component';

describe('ModifySkillComponent', () => {
  let component: ModifySkillComponent;
  let fixture: ComponentFixture<ModifySkillComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifySkillComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifySkillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
