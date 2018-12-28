import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { CacheService } from 'ionic-cache';
import { RssProvider } from '../../providers/rss/rss';
import { StorageProvider } from '../../providers/storage/storage';
import { PlayerProvider } from '../../providers/player/player';
import { Storage } from '@ionic/storage';
import { File } from '@ionic-native/file';
import { PodcastPage } from '../podcast/podcast';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {
	rssDataArray: any = [];

  constructor(private file: File, private _storage: Storage, public storage: StorageProvider, public cache: CacheService, public navCtrl: NavController, public navParams: NavParams, public rssProvider: RssProvider, public player: PlayerProvider) {
  	//this.Get_RSS_Feed();
    this.rssProvider.GetCached().then((data) => {
      if (data) {
        console.log('yes');
        this.rssDataArray = data;
      }else{
        console.log('no');
        this.Get_RSS_Feed();
      }
      
    });
  }

  ionViewDidLoad() {
    
  }

  itemTapped(event, podcast) {
    // That's right, we're pushing to ourselves!
    this.navCtrl.push(PodcastPage, {
      podcast: podcast
    });
  }

  Search() {
    console.log('search');
  }

  addToFav(podcast) {
    podcast.userData.favorite = true;
    this._storage.set('STORAGE_DATA', this.rssDataArray);

  }

  IsDownloaded(date) {
  	date = date.split(' ')[0]+'.mp3';
  	this.storage.Get(date).then((location) => {
  		if (location != null) {
  			return true;
  		}
  	});

  }

  Download(url, date) {
  	this.storage.Download(url, date.split(" ")[0]);
  }

  ForceReload(refresher) {
    this.rssProvider.GetRSS().then(
  		data => {
  		this.rssDataArray = data;
  		console.log(data);
  		refresher.complete();
  	}
  );  
  }

  Get_RSS_Feed() {
    this.rssProvider.GetRSS().then((data) => {
      console.log('got', data);
      this.rssDataArray = data;
    });
  
 }

 PlayPodcast(date, url, title, author, image) {
 	this.player.Stop();
 	date = date.split(' ')[0]+'.mp3';
 	console.log('filename', date);
 	this.storage.IsDownloaded(date).then((res)=> {
 			let location = this.file.dataDirectory + date;
 			console.log('found it, playing from local storage', res, location);
 			this.player.Play(location, title, author, "https://www.thehighersidechats.com/wp-content/uploads/powerpress/Original_Logo_iTunes3.jpg");
 		}
 	).catch((err) => {
 			let location = url;
 			console.log('not downloaded, streaming from internet', err, location);
 			this.player.Play(url, title, author, "https://www.thehighersidechats.com/wp-content/uploads/powerpress/Original_Logo_iTunes3.jpg");
 		
 	});
 	
}

 ReFormat(title, part) {
 	if (part == 0) {
 		return title.split('|')[0].replace('&amp;', '&');
 	}if (part == 1) {
 		return title.split('|')[1].replace('&amp;', '&').split('-')[0];
 	}
 	
 }

}
