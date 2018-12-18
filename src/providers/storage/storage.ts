import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { FileTransfer, FileTransferObject } from '@ionic-native/file-transfer';
import { File } from '@ionic-native/file';
import { Toast } from '@ionic-native/toast';
/*
  Generated class for the StorageProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class StorageProvider {

  constructor(private toast: Toast, private transfer: FileTransfer, private file: File, public http: HttpClient, private storage: Storage) {
    console.log('Hello StorageProvider Provider');
  }

  Toast(text) {
  	this.toast.show(text, '5000', 'center').subscribe(
		  toast => {
		    console.log(toast);
		  }
		);
  }

  Download(url, date) {
  	this.file.checkFile(this.file.dataDirectory, date + '.mp3').then(
  		(file) => {
  			console.log('found file. No need to download', file)
  		}
  	).catch(
	  	(err) => {
	  		console.log('no file found. Downloading')
	  		const fileTransfer: FileTransferObject = this.transfer.create();
		  	this.toast.show(url + ', ' + this.file.dataDirectory + date + '.mp3', '5000', 'center').subscribe(
				  toast => {
				    console.log(toast);
				  }
				);

		  	fileTransfer.onProgress((progress) => console.log(Math.round(((progress.loaded / progress.total) * 100))) );

			fileTransfer.download(url, this.file.dataDirectory + date + '.mp3').then((entry) => {
		    	console.log('download complete: ' + entry.toURL());
		    	this.toast.show('download complete: ' + entry.toURL(), '5000', 'center').subscribe(
				  toast => {
				    console.log(toast);
				  }
				);
		    	this.Set(date, this.file.dataDirectory + date + '.mp3');
		  	}, (error) => {
		    	console.log(error);
		    	this.toast.show('error '+ error, '5000', 'center').subscribe(
				  toast => {
				    console.log(toast);
				  }
				);
		  	});

  		});
  	
  }

  Set(key, val) {
  	this.storage.set(key, val);
  	console.log('Set', key, val);
  }

  Get(key) {
  	this.storage.get(key).then((val) => {
  		console.log('Got', val, key);
  	});
  }

}
