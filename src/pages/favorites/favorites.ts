import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RssProvider } from '../../providers/rss/rss';
import { PodcastPage } from '../podcast/podcast';

/**
 * Generated class for the FavoritesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-favorites',
  templateUrl: 'favorites.html',
})
export class FavoritesPage {
	favPodcasts = [];
	hasFavs;

  constructor(private rssProvider: RssProvider, public navCtrl: NavController, public navParams: NavParams) {
  	this.rssProvider.GetCached().then((data) => {
      if (data) {
        console.log('yes favs');
        var result = data.podcasts.filter(obj => {
		  return obj.userData.favorite === true
		});
       // let index = data.podcasts.findIndex(i => i.userData.favorite === true);
        this.favPodcasts = result;
        this.hasFavs = true;
      }else{
        console.log('no favs');
        this.hasFavs = false;
      }
      
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FavoritesPage');
  }

  ionViewDidEnter() {
  	this.rssProvider.GetCached().then((data) => {
      if (data) {
        console.log('yes favs');
        var result = data.podcasts.filter(obj => {
		  return obj.userData.favorite === true
		});
       // let index = data.podcasts.findIndex(i => i.userData.favorite === true);
        this.favPodcasts = result;
        this.hasFavs = true;
      }else{
        console.log('no favs');
        this.hasFavs = false;
      }
      
    });
  }


  itemTapped(event, podcast) {
    // That's right, we're pushing to ourselves!
    this.navCtrl.push(PodcastPage, {
      podcast: podcast
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
