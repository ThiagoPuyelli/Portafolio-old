import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaveAboutComponent } from './save-about.component';

describe('SaveAboutComponent', () => {
  let component: SaveAboutComponent;
  let fixture: ComponentFixture<SaveAboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SaveAboutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SaveAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
