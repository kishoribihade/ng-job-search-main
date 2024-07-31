import { Component, OnInit } from '@angular/core';
import { RouterOutlet, Router } from '@angular/router';
import { JobBoardComponent} from './Component/job-board/job-board.component';
import { JobHubService } from './job-hub.service';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,
    JobBoardComponent
      ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'ng-job-search';
  
  constructor(private router: Router,private jobHubService :JobHubService){}

  ngOnInit(): void {
    this.getJobList();
  }

  switchTab(tabname: string){
    this.router.navigate([`/${tabname}`]);
  }

  getJobList() {
    this.jobHubService.getData().subscribe(data => {
    localStorage.setItem('jobCollectData', JSON.stringify(data));
    //this.jobHubService.DuplicateRecList = data;
    })
  }
}