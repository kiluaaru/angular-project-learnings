import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ApiUrls  } from './api.urls';

const API_URL = 'https://reqres.in';
@Injectable(
  {
    providedIn: 'root'
  }
)

export class firstApiService {
  constructor (private httpClient: HttpClient) {

  }
  
  getApiResult(url): Observable <any> {
    return this.httpClient.get(API_URL + '/api/' + url)
    .pipe(map( res => res ));
    // ApiUrls.API_URL1 
  }
}