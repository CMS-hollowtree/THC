import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { CacheService } from 'ionic-cache';
import { RssProvider } from '../../providers/rss/rss';
import { StorageProvider } from '../../providers/storage/storage';
import { PlayerProvider } from '../../providers/player/player';
import { Storage } from '@ionic/storage';
import { PodcastPage } from '../podcast/podcast';
import { ActionSheetController } from 'ionic-angular';
import { Toast } from '@ionic-native/toast';
import { AdMobFree, AdMobFreeBannerConfig, AdMobFreeInterstitialConfig } from '@ionic-native/admob-free';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {
  searching: boolean = false;
	rssDataArray: any = [];
  searchResults: any = [];
  searchTerm: string = '';

  constructor(private adMob: AdMobFree, public toast: Toast, public actionSheetCtrl: ActionSheetController, private _storage: Storage, public storage: StorageProvider, public cache: CacheService, public navCtrl: NavController, public navParams: NavParams, public rssProvider: RssProvider, public player: PlayerProvider) {
    this.rssProvider.GetCached().then((data) => {
      if (data) {
        console.log('yes');
        this.rssDataArray = data;
      }else{
        console.log('no');
        this.Get_RSS_Feed();
      }
      
    });

    //this.ShowBannerAd();
    //this.ShowFullAd();
  }

  ionViewDidLoad() {
    this.ShowBannerAd();
  }

  async ShowBannerAd() {
      const bannerConfig: AdMobFreeBannerConfig = {
        //id: 'ca-app-pub-3940256099942544/6300978111',
        id: 'ca-app-pub-0529413882147962/2320999051',
        //isTesting: false,
        autoShow: true,
      }

      this.adMob.banner.config(bannerConfig);

      try {
        const result = await this.adMob.banner.prepare();
        console.log(result);
      }catch (e) {
        console.log(e);
      }
    }

  async ShowFullAd() {
    try {
      const interstitialConfig: AdMobFreeInterstitialConfig = {
        //id: 'ca-app-pub-3940256099942544/1033173712',
        
        id: 'ca-app-pub-0529413882147962/6907111325',
        autoShow: true
      }

      this.adMob.interstitial.config(interstitialConfig);
      const result = await this.adMob.interstitial.prepare();
      console.log(result);
    } catch (e) {
      console.log(e)
    }
  }

  SortItems() {
    return this.rssDataArray.podcasts = this.rssDataArray.podcasts.reverse();
  }

  filterItems(searchTerm){
    return this.searchResults = this.rssDataArray.podcasts.filter((podcast) => {
      return podcast.title.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1 || podcast.description.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1 || podcast.pubDate.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
    });    
 
  }

  SetFilteredPodcasts() {
    this.filterItems(this.searchTerm);
    console.log(this.searchTerm);
  }

  SearchFor(event) {
    console.log(event);
  }

  Search() {
    return this.searching = !this.searching;
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
        },
        {
          text: 'Clear local storage',
          handler: () => {
            console.log('clearing local storage');
            //Toast('Looking for new podcasts...');
            this._storage.remove('STORAGE_DATA');
            this.rssDataArray = [];
            }
          }
      ]
    });

    actionSheet.present();
  }

  itemTapped(event, podcast) {
    // That's right, we're pushing to ourselves!
    this.navCtrl.push(PodcastPage, {
      podcast: podcast
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
        }, 3500);
        
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
