import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { JobHubService } from '../../job-hub.service';
import { HttpClient, HttpParams } from '@angular/common/http';


export interface JobInfo {
  id: number,
  companyName: string,
  title: string,
  companyLogo: string,
  reference: string,
  isSelectedFav: boolean
}

@Component({
  selector: 'app-job-board',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './job-board.component.html',
  styleUrl: './job-board.component.css'
})
export class JobBoardComponent implements OnInit {
  records: any[] = []; 
  selectedRecordId: string | null = null;
  http = inject(HttpClient)
  JobCollectData: JobInfo[] = [];
  ids: number[] = [];
  isSelected: boolean = false;
  error: string = "data not loading";
  selJob: any;
  constructor(private jobHubService: JobHubService, private router: Router) { }

  ngOnInit(): void {
     //localStorage.removeItem('jobCollectData')
    this.getJobList();
    const storedData = localStorage.getItem('jobCollectData');

    if (storedData) {
      const jobCollectData = JSON.parse(storedData);
      this.selJob = JSON.parse(localStorage.getItem('selectedRecArray') || '[]');
      jobCollectData.forEach((x: any) => {
        x.isSelectedFav = this.selJob.some((v: any) => v.id === x.id)
        this.JobCollectData.push(x);
      })
    } else {
      console.log('No data found in Local Storage.');
    }
    
  }

 getJobList() {
    this.jobHubService.getData().subscribe(data => {
    localStorage.setItem('jobCollectData', JSON.stringify(data));
    //this.jobHubService.DuplicateRecList = data;
    })
  }

  highlightPreferred(data: JobInfo) {
    const index = this.JobCollectData.findIndex(x => x.id === data.id);
    this.JobCollectData[index].isSelectedFav = !this.JobCollectData[index].isSelectedFav;
    let selectedRecArray: JobInfo[] = JSON.parse(localStorage.getItem('selectedRecArray') || '[]');

    // Check if the data is already in the selectedRecArray
    const jobindex = selectedRecArray.findIndex(x => x.id === data.id);

    if (jobindex === -1) {
      // Item not found in the array, add it
      selectedRecArray.push(data);
    } else {
      // Item found in the array, remove it
      selectedRecArray.splice(jobindex, 1);
    }
    if (selectedRecArray.length === 0) {
      localStorage.removeItem('selectedRecArray');
    } else {
      localStorage.setItem('selectedRecArray', JSON.stringify(selectedRecArray));
    }
  }


  jobDetailView(itemId: number) {
    this.router.navigate(['/jobDetailView', itemId]);
  }


}
