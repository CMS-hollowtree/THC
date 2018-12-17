import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
/*
  Generated class for the StorageProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class StorageProvider {

  constructor(public http: HttpClient, private storage: Storage) {
    console.log('Hello StorageProvider Provider');
  }

  Set(key, val) {
  	this.storage.set(key, val);
  }

  Get(key) {
  	this.storage.get(key).then((val) => {
  		console.log(val);
  	});
  }

}
