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

  http = inject(HttpClient)
  JobCollectData: JobInfo[] = [];
  isSelected: boolean = false;
  error: string = "data not loading";
  constructor(private jobHubService: JobHubService, private router: Router){}

  ngOnInit(): void{
    if (this.jobHubService.selectedRecArray.length != 0) {
      this.JobCollectData = this.jobHubService.DuplicateRecList;
    } else {
      this.getJobList();
    }
  }

  getJobList() {
    this.jobHubService.getData().subscribe(data => {
      this.JobCollectData = data;
      this.jobHubService.DuplicateRecList = this.JobCollectData;
    })
    }
    
    
    highlightPreferred(data: JobInfo) {
      const item = this.JobCollectData.filter(x => x.id === data.id);
      if(item[0].isSelectedFav){
        item[0].isSelectedFav = false;
      } else {
        item[0].isSelectedFav = true;
      }
      this.onFavSelect(data);
    }

  onFavSelect(data: JobInfo) {
    if(this.jobHubService.selectedRecArray.length === 0) {
      this.jobHubService.selectedRecArray.push(data);
      this.jobHubService.duplicateRecArray = this.jobHubService.selectedRecArray;
      this.jobHubService.preferredRec = this.jobHubService.selectedRecArray;
    } 
    else {
      for(let i = 0; i < this.jobHubService.selectedRecArray.length ; i++){
          if(this.jobHubService.selectedRecArray.find(x => x.id === data.id) === undefined) {
            this.jobHubService.duplicateRecArray.push(data);
            break;
          } else {
            this.jobHubService.duplicateRecArray.forEach((item, index) => {
              if(item.id === data.id) {
                this.jobHubService.duplicateRecArray.splice(index, 1);
              }
            });
            break;
          }
        }
        this.jobHubService.selectedRecArray = this.jobHubService.duplicateRecArray;
        this.jobHubService.preferredRec = this.jobHubService.selectedRecArray;
      }
  }

  
  jobDetailView(SelectedJobRec: JobInfo) {
    this.jobHubService.SelectedJobRec = SelectedJobRec;
    this.router.navigate(['/jobDetailView']);
  }


}
