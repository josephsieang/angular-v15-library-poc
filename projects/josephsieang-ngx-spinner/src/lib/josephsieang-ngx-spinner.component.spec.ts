import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JosephsieangNgxSpinnerComponent } from './josephsieang-ngx-spinner.component';

describe('JosephsieangNgxSpinnerComponent', () => {
  let component: JosephsieangNgxSpinnerComponent;
  let fixture: ComponentFixture<JosephsieangNgxSpinnerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JosephsieangNgxSpinnerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JosephsieangNgxSpinnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
