import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { RssProvider } from '../../providers/rss/rss';
import { PlayerProvider } from '../../providers/player/player';



@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {
	rssDataArray: any = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, public rssProvider: RssProvider, public player: PlayerProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
    this.Get_RSS_Feed();
  }

  Get_RSS_Feed() {
  	this.rssProvider.GetRSS().subscribe(
  		data => {
  		this.rssDataArray = data;
  		console.log(data);
  	}
  );
 }

 PlayPodcast(url) {
 	this.player.Play(url);
}

 ReFormat(title, part) {
 	if (part == 0) {
 		return title.split('|')[0];
 	}if (part == 1) {
 		return title.split('|')[1].replace('&amp;', '&').split('-')[0];
 	}
 	
 }

}
