/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CdkService } from './cdk.service';

describe('CdkService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CdkService]
    });
  });

  it('should ...', inject([CdkService], (service: CdkService) => {
    expect(service).toBeTruthy();
  }));
});
