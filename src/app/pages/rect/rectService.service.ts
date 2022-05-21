import { applicationUrls } from './../../shared/application-urls.const';
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Rectangular } from '../models/rectangular';

@Injectable({
  providedIn: 'root',
})
export class RectServiceService {

  
  constructor(
    private httpClient: HttpClient, private router: Router
    ) {}
  // height: any, width: any, color: any, x: any, y: any, rx: any, ry: any


  save(rect: Rectangular):Observable<any> {
    console.log('rect',rect);
  
    return this.httpClient.post<any>(`${applicationUrls.Recatngular.create}`,rect)
  }
}
