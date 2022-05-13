import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IUser } from './IActivity';
@Injectable({
  providedIn: 'root'
})
export class ActivityService {

  constructor(private http: HttpClient) { }

getActivity(): Observable<IUser[]>{
  return this.http.get<IUser[]>('http://www.boredapi.com/api/activity/')
} 

getPrice(): Observable<IUser[]>{
  return this.http.get<IUser[]>('http://www.boredapi.com/api/activity?price')
} 

// getRawData(): Observable<any> {
//   const api = 'http://www.boredapi.com/api/activity/';
//   return this.http.get(api,{ responseType: 'text' });    
// }



}
