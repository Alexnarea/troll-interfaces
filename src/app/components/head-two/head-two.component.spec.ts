import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadTwoComponent } from './head-two.component';

describe('HeadTwoComponent', () => {
  let component: HeadTwoComponent;
  let fixture: ComponentFixture<HeadTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeadTwoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HeadTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
