import { findLast } from '@angular/compiler/src/directive_resolver';
import { TestBed } from '@angular/core/testing';

import { EmployeeServiceService } from './employee-service.service';

describe('EmployeeServiceService', () => {
  let service: EmployeeServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmployeeServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});



