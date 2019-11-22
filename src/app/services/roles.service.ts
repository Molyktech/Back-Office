import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RolesService {
  url = 'https://mercatoroathapi.azurewebsites.net/api';
  constructor(private httpClient: HttpClient) { }

  saveRole(role) {
    return this.httpClient.post(`${this.url}/Role/Save`, role );
  }

  getRoleByInstitutionId(id) {
    return this.httpClient.get(`${this.url}/Role/GetByInstitutionID/${id}`);
  }

  updateRole(role) {
    return this.httpClient.post(`${this.url}/Role/Update`, role);
  }
}
