import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { StorageProvider } from '../storage/storage';
import { CacheService } from 'ionic-cache';



@Injectable()
export class RssProvider {
	  private API_URL: string;

  constructor(public cache: CacheService, public http: HttpClient, public storage: StorageProvider) {
  	this.API_URL = "https://api.rss2json.com/v1/api.json";
    console.log('Hello RssProvider Provider');
  }

  GetRSS() {
  	const params = {
  		params: new HttpParams().set('rss_url', 'https://www.thehighersidechats.com/feed/podcast').set('api_key','yqkqpe8nkirfvdeijgu0arymq7panztpvf56h7hh').set('count', '1000').set('order_by', 'pubDate').set('order_dir', 'desc')
    }
    let request = this.http.get(this.API_URL, params);
    return this.cache.loadFromObservable('TEST', request);

}

}
