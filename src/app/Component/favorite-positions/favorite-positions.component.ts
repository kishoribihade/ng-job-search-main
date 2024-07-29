import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { JobHubService } from '../../job-hub.service';

export interface JobInfo {
  id: number,
  companyName: string,
  title: string,
  companyLogo: string,
  reference: string,
  isSelectedFav: boolean
} 

@Component({
  selector: 'app-favorite-positions',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './favorite-positions.component.html',
  styleUrl: './favorite-positions.component.css'
})
export class FavoritePositionsComponent implements OnInit {

  nofavoRec: string | undefined;
  isfavo: boolean = false;

  constructor(private jobHubService: JobHubService,
    private router: Router){}
    favoRecList: JobInfo[] = [];

 ngOnInit(): void {
    if(this.jobHubService.preferredRec.length !== 0) {
      this.isfavo = true;
      this.favoRecList = this.jobHubService.preferredRec;
    } else {
      this.isfavo = false;
      this.nofavoRec = 'No favorite selected'
    }
  }

  jobDetailView(SelectedJobRec: JobInfo) {
    this.jobHubService.SelectedJobRec = SelectedJobRec;
    this.router.navigate(['/jobDetailView']);
  }

}
