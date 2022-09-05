import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuartoComponentComponent } from './quarto-component.component';

describe('QuartoComponentComponent', () => {
  let component: QuartoComponentComponent;
  let fixture: ComponentFixture<QuartoComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuartoComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuartoComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
