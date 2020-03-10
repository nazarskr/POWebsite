import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminChangelpComponent } from './admin-changelp.component';

describe('AdminChangelpComponent', () => {
  let component: AdminChangelpComponent;
  let fixture: ComponentFixture<AdminChangelpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminChangelpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminChangelpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
