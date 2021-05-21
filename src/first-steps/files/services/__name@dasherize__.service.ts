import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable()
export class <%= name %>Service {

  private urlApi: string;

  constructor(private http: HttpClient) {
    this.urlApi = this.config.urlApi;
  }

  get<%= classify(name) %>():Observable<<%= classify(name) %>> {
    return this.http.get<<%= classify(name) %>>(`${this.urlApi}`).pipe(
      map(response => new <%= classify(name) %>(response))
    );
  }

}
