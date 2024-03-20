import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Vehicle } from '../Model/Vehicle';

@Injectable({
  providedIn: 'root'
})
export class VehService {

  private httpHeaders : HttpHeaders;
  vehicle : Vehicle[] | any;

  constructor(private httpClient : HttpClient) {
    this.httpHeaders = new HttpHeaders({ 'content-type' : 'application/json' });
   }

   GetVehicles() : Observable<Vehicle[]>{
     return this.httpClient.get<Vehicle[]>(environment.apiAddress + "Veh");
   }

   GetVehicleById(id : any) : Observable<Vehicle>{
     return this.httpClient.get<Vehicle>(environment.apiAddress + "Veh/" + id)
   }

   AddVehicle(vehicle : Vehicle) : Observable<HttpResponse<any>>{
     return this.httpClient.post<HttpResponse<any>>(environment.apiAddress + "Veh", JSON.stringify(vehicle), { headers : this.httpHeaders, observe : 'response' });
   }

   
   UpdateVehicle(vehicle : Vehicle, id : any) : Observable<HttpResponse<any>>{
    return this.httpClient.put<HttpResponse<any>>(environment.apiAddress + "Veh/" + id, JSON.stringify(vehicle), { headers : this.httpHeaders, observe : 'response' });
  }

  DeleteVehicle(id: any): Observable<HttpResponse<any>> {
    return this.httpClient.delete<HttpResponse<any>>(environment.apiAddress + 'Veh/' + id, { headers: this.httpHeaders, observe: 'response' });
  }
}
