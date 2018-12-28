import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-podcast',
  templateUrl: 'podcast.html',
})
export class PodcastPage {
	podcast;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  	this.podcast = this.navParams.get('podcast');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PodcastPage', this.navParams.get('podcast'));
  }

  ReFormat(title, part) {
 	if (part == 0) {
 		return title.split('|')[0].replace('&amp;', '&');
 	}if (part == 1) {
 		return title.split('|')[1].replace('&amp;', '&').split('-')[0];
 	}if (part == 2) {
 		return title.replace(/&amp;/g, '&');
 	}
 	
 }

}
