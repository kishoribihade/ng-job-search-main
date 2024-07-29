import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { JobHubService } from '../../job-hub.service';

export interface JobDetailInfo {
  id: number,
  companyName: string,
  title: string,
  companyLogo: string,
  reference: string,
  location: string,
  industries: string,
  types: string,
  description: string,
  publishDate: string
}


@Component({
  selector: 'app-job-detail-view',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './job-detail-view.component.html',
  styleUrl: './job-detail-view.component.css'
})
export class JobDetailViewComponent implements OnInit {

  constructor(private jobHubService: JobHubService,
    private router: Router){}
  http = inject(HttpClient)
  detailInfo!: JobDetailInfo;

 navigateToBoard() {
  this.router.navigate(['/jobBoard']);
 }

  ngOnInit(): void {
    const RecId = this.jobHubService.SelectedJobRec.id;
    this.getRecDetails(RecId);
  }

    getRecDetails(id: number) {
     const url = `${'/jobs'}/${id}`;
     this.http.get<JobDetailInfo>(url).subscribe((res => {
      this.detailInfo = res;
    }))
  }

}
