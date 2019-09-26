import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignUpSuccessComponentComponent } from './sign-up-success-component.component';

describe('SignUpSuccessComponentComponent', () => {
  let component: SignUpSuccessComponentComponent;
  let fixture: ComponentFixture<SignUpSuccessComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignUpSuccessComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignUpSuccessComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
