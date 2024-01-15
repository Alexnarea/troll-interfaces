import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadOneComponent } from './head-one.component';

describe('HeadOneComponent', () => {
  let component: HeadOneComponent;
  let fixture: ComponentFixture<HeadOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeadOneComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HeadOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
