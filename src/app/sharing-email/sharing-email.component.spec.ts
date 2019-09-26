import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SharingEmailComponent } from './sharing-email.component';

describe('SharingEmailComponent', () => {
  let component: SharingEmailComponent;
  let fixture: ComponentFixture<SharingEmailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SharingEmailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SharingEmailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
