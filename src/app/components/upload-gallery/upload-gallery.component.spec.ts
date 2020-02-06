import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadGalleryComponent } from './upload-gallery.component';

describe('UploadGalleryComponent', () => {
  let component: UploadGalleryComponent;
  let fixture: ComponentFixture<UploadGalleryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UploadGalleryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
