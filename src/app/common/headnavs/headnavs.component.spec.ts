import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadnavsComponent } from './headnavs.component';

describe('HeadnavsComponent', () => {
  let component: HeadnavsComponent;
  let fixture: ComponentFixture<HeadnavsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeadnavsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeadnavsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
