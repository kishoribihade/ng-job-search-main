import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';


export interface JobInfo {
  id: number,
  companyName: string,
  title: string,
  companyLogo: string,
  reference: string,
  isSelectedFav: boolean
} 

@Injectable({
  providedIn: 'root'
})


export class JobHubService {

  selectedRecArray: JobInfo[] = [];
  duplicateRecArray : JobInfo[] = [];
  SelectedJobRec!: JobInfo;
  preferredRec: JobInfo[] = [];
  DuplicateRecList: JobInfo[] = [];
  
  
  constructor(private http: HttpClient) { }

getData() {
  const jobsDataUrl = '/jobs';
  return this.http.get<JobInfo[]>(jobsDataUrl);
}
}
