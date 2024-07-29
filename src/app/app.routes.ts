import { Routes } from '@angular/router';
import { JobBoardComponent } from './Component/job-board/job-board.component'
import { FavoritePositionsComponent } from './Component/favorite-positions/favorite-positions.component';
import { JobDetailViewComponent } from './Component/job-detail-view/job-detail-view.component';

export const routes: Routes = [
    {path: "", component: JobBoardComponent},
    {path: "jobBoard", component: JobBoardComponent},
    {path: "favPos", component: FavoritePositionsComponent},
    {path: "jobDetailView", component: JobDetailViewComponent}
];
