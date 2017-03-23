import { TestBed, inject } from '@angular/core/testing';

import { CvUploaderService } from './cv-uploader.service';

describe('CvUploaderService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CvUploaderService]
    });
  });

  it('should ...', inject([CvUploaderService], (service: CvUploaderService) => {
    expect(service).toBeTruthy();
  }));
});
