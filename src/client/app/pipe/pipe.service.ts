import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class PipeService {

  private _url: string = "statics/data/gdhMedia.json";

  constructor(private _http: Http) { }

  getMedia() {
    let media = this._http.get(this._url).map(
      this.extractData
    ).catch(this.throwException);

    return media;
  }

  extractData(res: Response) {
    let data = res.json() || [];
    data.forEach((medium: any) => {
      if (medium.QZoneDate !== null) {
        medium.QZoneDate = new Date(medium.QZoneDate);
      }
      if (medium.WeiboDate !== null) {
        medium.WeiboDate = new Date(medium.WeiboDate);
      }
      if (medium.FacebookDate !== null) {
        medium.FacebookDate = new Date(medium.FacebookDate);
      }
    });
    return data;
  }

  throwException(error: Response) {
    console.error(error);
    return Observable.throw(error || "Server Error");
  }
}

