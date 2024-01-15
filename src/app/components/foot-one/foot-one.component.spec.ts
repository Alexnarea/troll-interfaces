import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FootOneComponent } from './foot-one.component';

describe('FootOneComponent', () => {
  let component: FootOneComponent;
  let fixture: ComponentFixture<FootOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FootOneComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FootOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
