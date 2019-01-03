import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { PlayerProvider } from '../../providers/player/player';
import { StorageProvider } from '../../providers/storage/storage';
import { File } from '@ionic-native/file';


@IonicPage()
@Component({
  selector: 'page-podcast',
  templateUrl: 'podcast.html',
})
export class PodcastPage {
	podcast;
	storageData;

  constructor(private file: File, private player: PlayerProvider, private storage: StorageProvider, private _storage: Storage, public navCtrl: NavController, public navParams: NavParams) {
  	this.podcast = this.navParams.get('podcast');
  	//this.podcasts = this.navParams.get('podcasts');
  	this.podcast.duration = (this.podcast.duration / 60 / 60);

  	if (this.podcast.duration > 1) {
  		let hours = this.podcast.duration.toString().split('.')[0];
  		let mins = this.podcast.duration.toString().split('.')[1];
  		mins = Number(mins);
  		mins = mins * 60;
  		this.podcast.duration = hours + ':' + mins;
  	}
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PodcastPage', this.navParams.get('podcast'));
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

  PlayPodcast(podcast, author) {
 	this.player.Stop();
 	let filename = podcast.pubDate.split(' ')[0]+'.mp3';
 	console.log('filename', filename);
 	if (podcast.userData.downloaded == true) {
 		let location = this.file.dataDirectory + filename;
 		console.log('found it, playing from local storage', location);
 		this.player.Play(location, podcast.title, author, podcast.coverImage);
	 	}else{
	 		let location = podcast.mp3;
	 		console.log('not downloaded, streaming from internet', location);
	 		this.player.Play(location, podcast.title, author, podcast.coverImage);
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
