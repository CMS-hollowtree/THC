import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { CacheService } from 'ionic-cache';
import { RssProvider } from '../../providers/rss/rss';
import { map } from 'rxjs/operators'

import { PlayerProvider } from '../../providers/player/player';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {
	rssDataArray: any = [];

  constructor(public cache: CacheService, public navCtrl: NavController, public navParams: NavParams, public rssProvider: RssProvider, public player: PlayerProvider) {
  	this.Get_RSS_Feed();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }

  ForceReload(refresher) {
    setTimeout(() => {
      this.Get_RSS_Feed();
      refresher.complete();
    }, 2000);
  
  }

  Get_RSS_Feed() {
  	this.rssProvider.GetRSS().subscribe(
  		data => {
  		this.rssDataArray = data;
  		//this.rssDataArray = this.cache.loadFromObservable('TEST', data);
  	}
  );
  
 }

 PlayPodcast(url, title, author, image) {
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
