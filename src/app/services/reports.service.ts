import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ReportsService {

  url = 'https://mercatoroathapi.azurewebsites.net/api';

  constructor(
    private httpClient: HttpClient
  ) { }

  getReports(id,startDate,endDate){
    return this.httpClient.get(`${this.url}/Report/GetPaymentReport/${id}/${startDate}/${endDate}`)
  }
}
