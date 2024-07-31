import { Component } from '@angular/core';
import { RouterOutlet, Router } from '@angular/router';
import { JobBoardComponent } from './Component/job-board/job-board.component';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,
    JobBoardComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ng-job-search';

  constructor(private router: Router) { }


  switchTab(tabname: string) {
    this.router.navigate([`/${tabname}`]);
  }


}