import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable()
export class RssProvider {
	  private API_URL: string;

  constructor(public http: HttpClient) {
  	this.API_URL = "https://api.rss2json.com/v1/api.json";
    console.log('Hello RssProvider Provider');
  }

  GetRSS() {
  	const params = {params: new HttpParams().set('rss_url', 'https://www.thehighersidechats.com/feed/podcast').set('api_key','yqkqpe8nkirfvdeijgu0arymq7panztpvf56h7hh').set('count', '1000').set('order_by', 'pubDate').set('order_dir', 'desc')
    }
    return this.http.get(this.API_URL, params);

}

}
