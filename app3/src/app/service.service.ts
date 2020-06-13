import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
constructor(private http:HttpClient) { }
topFlightRoute(){
    return this.http.get(`${'https://iamamankumar.com/api/v1/topFlightRoute'}`);
  }
  
editTopFlight(data){
  return this.http.post(`${'https://iamamankumar.com/api/v1/editTopFlight'}`, data);
}
}