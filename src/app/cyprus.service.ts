import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AIPConfig } from './config/APIConfig';
import { catchError, map, tap } from 'rxjs/operators';


@Injectable()
export class CyprusService {
  config = new AIPConfig();
  constructor(private http: HttpClient) { }

  postData(data: any) {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    return this.http.post(this.config.completeurl, data, httpOptions).pipe(tap(resp => console.log(resp)));
  }

  getData() {
    return this.http.get<any>(this.config.completeurl).pipe(tap(resp => console.log(resp)));

  }
}
