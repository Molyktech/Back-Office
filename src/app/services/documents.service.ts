import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DocumentsService {

  url = 'https://mercatoroathapi.azurewebsites.net/api';
  constructor(
    private httpClient: HttpClient
  ) { }

  getDocumentTypes(institutionId){
    return this.httpClient.get(`${this.url}/DocumentType/GetByInstitution/${institutionId}`)
  }
}
