import { TestBed } from '@angular/core/testing';

import { JosephsieangNgxSpinnerService } from './josephsieang-ngx-spinner.service';

describe('JosephsieangNgxSpinnerService', () => {
  let service: JosephsieangNgxSpinnerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JosephsieangNgxSpinnerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
