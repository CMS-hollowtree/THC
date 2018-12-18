import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { CacheService } from 'ionic-cache';
import { RssProvider } from '../../providers/rss/rss';
import { StorageProvider } from '../../providers/storage/storage';
import { PlayerProvider } from '../../providers/player/player';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {
	rssDataArray: any = [];

  constructor(public storage: StorageProvider, public cache: CacheService, public navCtrl: NavController, public navParams: NavParams, public rssProvider: RssProvider, public player: PlayerProvider) {
  }

  ionViewDidLoad() {
    this.Get_RSS_Feed();
  }

  CheckDownloaded(key) {
  	this.storage.Get(key.split(" ")[0]);
  }

  Download(url, date) {
  	this.storage.Download(url, date.split(" ")[0]);
  }

  ForceReload(refresher) {
    this.rssProvider.GetRSS().subscribe(
  		data => {
  		this.rssDataArray = data;
  		refresher.complete();
  	}
  );  
  }

  Get_RSS_Feed() {
  	this.rssProvider.GetRSS().subscribe(
  		data => {
  		this.rssDataArray = data;
  		
  	}
  );
  
 }

 PlayPodcast(date, url, title, author, image) {
 	console.log(Promise.resolve(this.storage.Get(date.split(' ')[0])));
 	this.player.Stop();
 	this.player.Play(url, title, author, "https://www.thehighersidechats.com/wp-content/uploads/powerpress/Original_Logo_iTunes3.jpg");
}

 ReFormat(title, part) {
 	if (part == 0) {
 		return title.split('|')[0];
 	}if (part == 1) {
 		return title.split('|')[1].replace('&amp;', '&').split('-')[0];
 	}
 	
 }

}
