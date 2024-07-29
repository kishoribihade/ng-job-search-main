import { TestBed } from '@angular/core/testing';

import { JobHubService } from './job-hub.service';

describe('JobHubService', () => {
  let service: JobHubService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JobHubService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
