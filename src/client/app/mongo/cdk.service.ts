import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

@Injectable()
export class CdkService {

  constructor(private http: Http) { }

  // Get all SDKs from the API
  getAllSDKs() {
    return this.http.get('/api/sdk').map(res => res.json());
  }

}
