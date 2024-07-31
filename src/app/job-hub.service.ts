import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


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
  
  
  //constructor(private http: HttpClient) { }
 // private _duplicateRecList = new BehaviorSubject<JobInfo[]>([]);

 // DuplicateRecListt = this._duplicateRecList.asObservable();

  constructor(private http: HttpClient) {
    // Load initial data from Local Storage
    //const storedData = localStorage.getItem('jobCollectData');
    // if (storedData) {
    //   try {
    //     const parsedData: JobInfo[] = JSON.parse(storedData);
    //     this.duplicateRecArray.next(parsedData);
    //   } catch (error) {
    //     console.error('Error parsing data from Local Storage:', error);
    //   }
    // }
    //this.loadFromLocalStorage();

  }

  // private loadFromLocalStorage(): void {
  //   const storedData = localStorage.getItem('jobCollectData');
    
  //   if (storedData) {
  //     try {
  //       const parsedData: JobInfo[] = JSON.parse(storedData);
  //       this._duplicateRecList.next(parsedData); // Emit data to subscribers
  //     } catch (error) {
  //       console.error('Error parsing data from Local Storage:', error);
  //     }
  //   }
  // }
  // updateJobData(newData: JobInfo[]): void {
  //   this._duplicateRecList.next(newData); // Emit new data
  //   localStorage.setItem('jobCollectData', JSON.stringify(newData));
  // }

  

getData() {
  const jobsDataUrl = '/jobs';
  return this.http.get<JobInfo[]>(jobsDataUrl);
}
}
