import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LanguageModeComponent } from './language-mode.component';

describe('LanguageModeComponent', () => {
  let component: LanguageModeComponent;
  let fixture: ComponentFixture<LanguageModeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LanguageModeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LanguageModeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
