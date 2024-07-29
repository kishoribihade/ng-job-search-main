import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobDetailViewComponent } from './job-detail-view.component';

describe('JobDetailViewComponent', () => {
  let component: JobDetailViewComponent;
  let fixture: ComponentFixture<JobDetailViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JobDetailViewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(JobDetailViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
