import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomizatiosComponent } from './customizatios.component';

describe('CustomizatiosComponent', () => {
  let component: CustomizatiosComponent;
  let fixture: ComponentFixture<CustomizatiosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CustomizatiosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomizatiosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
