import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Media, MediaObject } from '@ionic-native/media';
import { MusicControls } from '@ionic-native/music-controls';

/*
  Generated class for the PlayerProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class PlayerProvider {
	playingNow: any;

  constructor(public http: HttpClient, private media: Media, private musicControls: MusicControls) {
    
  }

  GetPlayerStatus() {
    if(this.playingNow){
      console.log('playing now yes', this.playingNow)
      return true;
    }else{
      console.log('playing now no', this.playingNow)
      return false;
    }
  }

  Pause() {
    this.playingNow.pause();
    this.musicControls.updateIsPlaying(false);
  }

  Stop() {
  	if (this.playingNow) {
  		this.playingNow.stop();
  		this.playingNow.release();
      this.musicControls.destroy();
  	}
  }

  Play(podcast, author, title, image) {
  	
  	const file: MediaObject = this.media.create(podcast);
  	this.Stop();
  	this.playingNow = file;
  
  	this.musicControls.create({
	  track       : title,        // optional, default : ''
	  artist      : 'Greg Carlwood & ' + author,                       // optional, default : ''
	  cover       : 'assets/imgs/Original_Logo_iTunes3.jpg', //image,      // optional, default : nothing
	  // cover can be a local path (use fullpath 'file:///storage/emulated/...', or only 'my_image.jpg' if my_image.jpg is in the www folder of your app)
	  //           or a remote url ('http://...', 'https://...', 'ftp://...')
	  isPlaying   : true,                         // optional, default : true
	  dismissable : false,                         // optional, default : false

	  // hide previous/next/close buttons:
	  hasPrev   : false,      // show previous button, optional, default: true
	  hasNext   : false,      // show next button, optional, default: true
	  hasClose  : true,       // show close button, optional, default: false

	 // iOS only, optional
	  album       : 'Absolution',     // optional, default: ''
	  duration : 60, // optional, default: 0
	  elapsed : 10, // optional, default: 0
	  hasSkipForward : true,  // show skip forward button, optional, default: false
	  hasSkipBackward : true, // show skip backward button, optional, default: false
	  skipForwardInterval: 15, // display number for skip forward, optional, default: 0
	  skipBackwardInterval: 15, // display number for skip backward, optional, default: 0
	  hasScrubbing: false, // enable scrubbing from control center and lockscreen progress bar, optional

	  // Android only, optional
	  // text displayed in the status bar when the notification (and the ticker) are updated, optional
	  ticker    : 'Now playing ' + title,
	  // All icons default to their built-in android equivalents
	  playIcon: 'media_play',
	  pauseIcon: 'media_pause',
	  prevIcon: 'media_prev',
	  nextIcon: 'media_next',
	  closeIcon: 'media_close',
	  notificationIcon: 'notification'
	 }).then((res) => {
     this.musicControls.updateIsPlaying(true);
   });

  	file.play();
  	console.log('playing', podcast, file);
    //this.musicControls.updateIsPlaying(true);

  	this.musicControls.subscribe().subscribe(action => {
            const message = JSON.parse(action).message;
            switch (message) {
                case 'music-controls-next':
                    
                    break;
                case 'music-controls-previous':
                    
                    break;
                case 'music-controls-pause':
                    file.pause();
                    this.musicControls.updateIsPlaying(false);
                    break;
                case 'music-controls-play':
                    file.play();
                    this.musicControls.updateIsPlaying(true);
                    break;
                case 'music-controls-destroy':
                    this.Stop();
                    break;
                default:
                    console.log(action);
                    break;
            }
        });
        this.musicControls.listen();

  }

}
