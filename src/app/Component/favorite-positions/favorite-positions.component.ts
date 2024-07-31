import { Component, OnInit,OnDestroy } from '@angular/core';
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
  
  const savedData = JSON.parse(localStorage.getItem('selectedRecArray') || '[]');
   if (savedData.length != 0) {
   
    this.favoRecList = savedData;
    this.isfavo = true;
   
  } else {
    this.isfavo = false;
    this.nofavoRec = 'No favorite selected';
  }

  if (this.jobHubService.preferredRec.length !== 0) {
    this.isfavo = false;
    this.favoRecList = this.jobHubService.preferredRec;
    localStorage.setItem('favoRecList', JSON.stringify(this.jobHubService.preferredRec));
    console.log("Data saved to localStorage");
  }
    
  }
  
  jobDetailView(itemId: number) {
    this.router.navigate(['/jobDetailView', itemId]);
  }
}



