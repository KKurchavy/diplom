import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CongradilationsComponent } from './congradilations.component';

describe('CongradilationsComponent', () => {
  let component: CongradilationsComponent;
  let fixture: ComponentFixture<CongradilationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CongradilationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CongradilationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
