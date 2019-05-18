import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WinnerPreviewComponent } from './winner-preview.component';

describe('WinnerPreviewComponent', () => {
  let component: WinnerPreviewComponent;
  let fixture: ComponentFixture<WinnerPreviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WinnerPreviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WinnerPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
