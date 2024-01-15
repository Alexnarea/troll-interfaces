import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FootTwoComponent } from './foot-two.component';

describe('FootTwoComponent', () => {
  let component: FootTwoComponent;
  let fixture: ComponentFixture<FootTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FootTwoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FootTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
