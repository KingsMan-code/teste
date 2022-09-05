import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuintoComponentComponent } from './quinto-component.component';

describe('QuintoComponentComponent', () => {
  let component: QuintoComponentComponent;
  let fixture: ComponentFixture<QuintoComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuintoComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuintoComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
