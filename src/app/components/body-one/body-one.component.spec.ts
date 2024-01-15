import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyOneComponent } from './body-one.component';

describe('BodyOneComponent', () => {
  let component: BodyOneComponent;
  let fixture: ComponentFixture<BodyOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BodyOneComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BodyOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
