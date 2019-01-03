import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { CacheService } from 'ionic-cache';
import { RssProvider } from '../../providers/rss/rss';
import { StorageProvider } from '../../providers/storage/storage';
import { PlayerProvider } from '../../providers/player/player';
import { Storage } from '@ionic/storage';
import { File } from '@ionic-native/file';
import { PodcastPage } from '../podcast/podcast';
import { ActionSheetController } from 'ionic-angular';
import { Toast } from '@ionic-native/toast';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {
  searching: boolean = false;
	rssDataArray: any = [];

  constructor(public toast: Toast, public actionSheetCtrl: ActionSheetController, private file: File, private _storage: Storage, public storage: StorageProvider, public cache: CacheService, public navCtrl: NavController, public navParams: NavParams, public rssProvider: RssProvider, public player: PlayerProvider) {
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

  SearchFor(event) {
    console.log(event);
  }

  Search() {
    return this.searching = true;
  }


  ShowActionSheet() {
    console.log('showing action sheet');
    let actionSheet = this.actionSheetCtrl.create({
      //title: 'test',
      buttons: [
        {
          text: 'Refresh',
          handler: () => {
            console.log('refresh from action sheet');
            //Toast('Looking for new podcasts...');
            this.ForceReload();
          }
        }
      ]
    });

    actionSheet.present();
  }

  itemTapped(event, podcast) {
    // That's right, we're pushing to ourselves!
    this.navCtrl.push(PodcastPage, {
      podcast: podcast,
      podcasts: this.rssDataArray
    });
  }

  ForceReload(refresher?) {
    this.rssProvider.GetRSS().then(
  		data => {
  		this.rssDataArray = data;
  		console.log(data);
      if (refresher) {
        setTimeout(function(){
            refresher.complete();
        }, 2000);
        
      }
  	}
  );  
  }

  Get_RSS_Feed() {
    this.rssProvider.GetRSS().then((data) => {
      console.log('got', data);
      this.rssDataArray = data;
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
