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
    this._storage.get('STORAGE_DATA').then((res) => {
      
      if (res) {
        console.log('here', res);
        this.storageData = res;
      }else{
        console.log('nada', res);
      }
      
    }).catch((err) => {
      console.log('err here', err);
    });
  	return this._storage.get('STORAGE_DATA');
  }


  GetRSS() {
    this.GetCached();
  	const params = {
  		params: new HttpParams().set('rss_url', 'https://www.thehighersidechats.com/feed/podcast').set('api_key','yqkqpe8nkirfvdeijgu0arymq7panztpvf56h7hh').set('count', '500').set('order_by', 'pubDate').set('order_dir', 'desc')
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
          console.log(this.storageData.podcasts.findIndex(i => i.pubDate === pcast.pubDate));
    		  if (this.storageData.podcasts.findIndex(i => i.pubDate === pcast.pubDate) < 0) {
            console.log('found new', pcast);
            this.storageData.podcasts.unshift(pcast);
          }else{
            
          }
    			
    	  });
        if (this.storageData.podcasts.length > 1) {
          this._storage.set('STORAGE_DATA', this.storageData);
          console.log('storage data', this.storageData);
        }else{
          console.log('no podcasts in array, maybe offline');
        }
        
        
    	}else{
        console.log('no data[items]');
      }
    });
    
    return new Promise((resolve, reject) => {
      if (this.storageData.podcasts) {
        resolve(this.storageData);
      }else{
        reject('no');
      }
    });
  }

}
