import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Hits } from '../models/hits';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  url : string = "https://hn.algolia.com/api/v1/search_by_date?tags=story";
  constructor(private httpClient: HttpClient) { }

  /**
   * fetch hits data from url
   *
   * @returns {Observable<Hits>}
   * @memberof CommonService
   */
  getHitsListing(): Observable<Hits> {
    return this.httpClient.get<Hits>(this.url);
  }
 
}
