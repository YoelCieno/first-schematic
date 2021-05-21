import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable()
export class readingService {

  private urlApi: string;

  constructor(private http: HttpClient) {
    this.urlApi = this.config.urlApi;
  }

  getReading():Observable<Reading> {
    return this.http.get<Reading>(`${this.urlApi}`).pipe(
      map(response => new Reading(response))
    );
  }

}
