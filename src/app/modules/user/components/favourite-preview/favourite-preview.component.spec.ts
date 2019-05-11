import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FavouritePreviewComponent } from './favourite-preview.component';

describe('FavouritePreviewComponent', () => {
  let component: FavouritePreviewComponent;
  let fixture: ComponentFixture<FavouritePreviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FavouritePreviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FavouritePreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
