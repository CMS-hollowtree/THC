import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { PlayerProvider } from '../../providers/player/player';
import { StorageProvider } from '../../providers/storage/storage';
import { AdMobFree, AdMobFreeInterstitialConfig } from '@ionic-native/admob-free';


@IonicPage()
@Component({
  selector: 'page-podcast',
  templateUrl: 'podcast.html',
})
export class PodcastPage {
	podcast;
	storageData;
  isPlaying;

  constructor(private adMob: AdMobFree, private player: PlayerProvider, private storage: StorageProvider, private _storage: Storage, public navCtrl: NavController, public navParams: NavParams) {
  	this.podcast = this.navParams.get('podcast');
  	//this.podcasts = this.navParams.get('podcasts');
  	this.podcast.duration = (this.podcast.duration / 60 / 60);
    this.isPlaying = this.player.GetPlayerStatus();
    console.log(this.player.playingNow);


  	if (this.podcast.duration > 1) {
  		let hours = this.podcast.duration.toString().split('.')[0];
  		let mins = this.podcast.duration.toString().split('.')[1];
  		mins = Number(mins) * 60;
  		this.podcast.duration = hours + ':' + mins;

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

  ionViewDidLoad() {
    this.ShowFullAd();
    console.log('ionViewDidLoad PodcastPage', this.navParams.get('podcast'));
    this.isPlaying = this.player.GetPlayerStatus();
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

  Download(url, date) {
  	this.storage.Download(url, date.split(" ")[0]);
  }


  PausePodcast() {
    if (this.isPlaying){
      this.player.Pause();
      this.isPlaying = 'paused';
    }
  }

  PlayPodcast(podcast, author) {
    if (this.isPlaying){
      this.player.Stop();
    }
 	
 	//let filename = podcast.pubDate.split(' ')[0]+'.mp3';
 	//console.log('filename', filename);
 //	if (podcast.userData.downloaded == true) {
 //		let location = this.file.dataDirectory + filename;
 	//	console.log('found it, playing from local storage', location);
 	//	this.player.Play(location, podcast.title, author, podcast.coverImage);
	// 	}else{
	 		//let location = podcast.mp3;
	 		console.log('not downloaded, streaming from internet', podcast.mp3);
	 		this.player.Play(podcast.mp3, podcast.title, author, podcast.coverImage);
      this.isPlaying = this.player.GetPlayerStatus();
      console.log(this.podcast.playingNow);
	 	//}
 	
	}

  StopPodcast() {
    console.log('stopping podcast');
    if (this.isPlaying){
      console.log('stopped podcast');
      this.player.Stop();
      this.isPlaying = false;
    }
    
  }

  addToFav(podcast) {
  	this.GetCached().then((res) => {
  		podcast.userData.favorite = !podcast.userData.favorite;
	    let pIndex = this.storageData.podcasts.findIndex(i => i.pubDate === podcast.pubDate);
	    this.storageData.podcasts[pIndex].userData.favorite = podcast.userData.favorite;
	    console.log('array fav', this.storageData.podcasts[pIndex].userData.favorite);
	    this._storage.set('STORAGE_DATA', this.storageData);
	  	});
   
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
