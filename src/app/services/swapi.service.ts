import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SwapiService {

  readonly SwapiURL = environment.swapiUrl;

  constructor(private http:HttpClient) { }
  
  getSwapi(path){
    return this.http.get(`${this.SwapiURL}${path}`);
  }
}
