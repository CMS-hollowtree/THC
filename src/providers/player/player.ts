import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Media, MediaObject } from '@ionic-native/media';

/*
  Generated class for the PlayerProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class PlayerProvider {

  constructor(public http: HttpClient, private media: Media) {
    console.log('Hello PlayerProvider Provider');
  }

  Play(podcast) {
  	const file: MediaObject = this.media.create(podcast);
  	file.play();
  	console.log('playing', podcast, file);
  }

}
