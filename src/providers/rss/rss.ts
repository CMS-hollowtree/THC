import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { StorageProvider } from '../storage/storage';
import { CacheService } from 'ionic-cache';
import { Storage } from '@ionic/storage';

import { PodcastClass } from './podcast';


@Injectable()
export class RssProvider {
	  private API_URL: string;
	  storageData = {
	  	podcasts: []
	  };

  constructor(private _storage: Storage, public cache: CacheService, public http: HttpClient, public storage: StorageProvider) {
  	this.API_URL = "https://api.rss2json.com/v1/api.json";
    console.log('Hello RssProvider Provider');
  }

  GetCached() {
  	console.log('getting data from local cache');
  	return this._storage.get('STORAGE_DATA');
  }


  GetRSS() {
  	const params = {
  		params: new HttpParams().set('rss_url', 'https://www.thehighersidechats.com/feed/podcast').set('api_key','yqkqpe8nkirfvdeijgu0arymq7panztpvf56h7hh').set('count', '1000').set('order_by', 'pubDate').set('order_dir', 'desc')
    }
    let request = this.http.get(this.API_URL, params);
    request.subscribe(data => {
    	if (data['items']) {
    		data['items'].forEach((podcast)=>{
          let coverImage = "assets/imgs/Original_Logo_iTunes3.jpg";
          let pcast = new PodcastClass(
            podcast.title, 
            podcast.pubDate, 
            podcast.description, 
            coverImage, 
            podcast.link, 
            podcast.enclosure.link, 
            podcast.enclosure.length, 
            podcast.enclosure.duration,
            {
              downloaded: false,
              favorite: false,
              listened: false,
              listening: false,
              lastPosition: 0,
              filePath: ''
            }
            );
    		  if (this.storageData.podcasts.findIndex(i => i.pubDate === pcast.pubDate)) {
            this.storageData.podcasts.push(pcast);
          }else{
            console.log(podcast.pubDate, 'already downloaded');
          }
    			
    	});
      this._storage.set('STORAGE_DATA', this.storageData);
      console.log('storage data', this.storageData);
        
    	}else{console.log('no data[items]');}
    });
    //return this.cache.loadFromObservable('TEST', request);
    return this._storage.get('STORAGE_DATA');
    
}

}
