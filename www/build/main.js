webpackJsonp([3],{

/***/ 108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FavoritesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(30);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the FavoritesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var FavoritesPage = /** @class */ (function () {
    function FavoritesPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    FavoritesPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad FavoritesPage');
    };
    FavoritesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-favorites',template:/*ion-inline-start:"C:\Users\root\Documents\Ionic\THC\src\pages\favorites\favorites.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Favorites</ion-title>\n    <ion-buttons end>\n      <button ion-button>\n        <ion-icon (click)="Search()" name="search" end></ion-icon>\n      </button>\n      <button ion-button>\n        <ion-icon (click)="Sort()" name="funnel" end></ion-icon>\n      </button>\n      <button ion-button>\n        <ion-icon (click)="More()" name="more" end></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <button ion-item *ngFor="let item of items" (click)="itemTapped($event, item)">\n      <ion-icon [name]="item.icon" item-start></ion-icon>\n      {{item.title}}\n      <div class="item-note" item-end>\n        {{item.note}}\n      </div>\n    </button>\n  </ion-list>\n  <div *ngIf="selectedItem" padding>\n    You navigated here from <b>{{selectedItem.title}}</b>\n  </div>\n</ion-content>\n'/*ion-inline-end:"C:\Users\root\Documents\Ionic\THC\src\pages\favorites\favorites.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], FavoritesPage);
    return FavoritesPage;
}());

//# sourceMappingURL=favorites.js.map

/***/ }),

/***/ 109:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PodcastPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_player_player__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_storage_storage__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_file__ = __webpack_require__(52);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var PodcastPage = /** @class */ (function () {
    function PodcastPage(file, player, storage, _storage, navCtrl, navParams) {
        this.file = file;
        this.player = player;
        this.storage = storage;
        this._storage = _storage;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.podcast = this.navParams.get('podcast');
        //this.podcasts = this.navParams.get('podcasts');
        this.podcast.duration = (this.podcast.duration / 60 / 60);
        if (this.podcast.duration > 1) {
            var hours = this.podcast.duration.toString().split('.')[0];
            var mins = this.podcast.duration.toString().split('.')[1];
            mins = Number(mins);
            mins = mins * 60;
            this.podcast.duration = hours + ':' + mins;
        }
    }
    PodcastPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PodcastPage', this.navParams.get('podcast'));
    };
    PodcastPage.prototype.GetCached = function () {
        var _this = this;
        console.log('getting data from local cache');
        this._storage.get('STORAGE_DATA').then(function (res) {
            if (res) {
                console.log('here', res);
                _this.storageData = res;
            }
            else {
                console.log('nada', res);
            }
        }).catch(function (err) {
            console.log('err here', err);
        });
        return this._storage.get('STORAGE_DATA');
    };
    PodcastPage.prototype.Download = function (url, date) {
        this.storage.Download(url, date.split(" ")[0]);
    };
    PodcastPage.prototype.PlayPodcast = function (podcast, author) {
        this.player.Stop();
        var filename = podcast.pubDate.split(' ')[0] + '.mp3';
        console.log('filename', filename);
        if (podcast.userData.downloaded == true) {
            var location = this.file.dataDirectory + filename;
            console.log('found it, playing from local storage', location);
            this.player.Play(location, podcast.title, author, podcast.coverImage);
        }
        else {
            var location = podcast.mp3;
            console.log('not downloaded, streaming from internet', location);
            this.player.Play(location, podcast.title, author, podcast.coverImage);
        }
    };
    PodcastPage.prototype.addToFav = function (podcast) {
        var _this = this;
        this.GetCached().then(function (res) {
            podcast.userData.favorite = !podcast.userData.favorite;
            var pIndex = _this.storageData.podcasts.findIndex(function (i) { return i.pubDate === podcast.pubDate; });
            _this.storageData.podcasts[pIndex].userData.favorite = podcast.userData.favorite;
            console.log('array fav', _this.storageData.podcasts[pIndex].userData.favorite);
            _this._storage.set('STORAGE_DATA', _this.storageData);
        });
    };
    PodcastPage.prototype.ReFormat = function (title, part) {
        if (part == 0) {
            return title.split('|')[0].replace('&amp;', '&');
        }
        if (part == 1) {
            return title.split('|')[1].replace('&amp;', '&').split('-')[0];
        }
        if (part == 2) {
            return title.replace(/&amp;/g, '&');
        }
    };
    PodcastPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-podcast',template:/*ion-inline-start:"C:\Users\root\Documents\Ionic\THC\src\pages\podcast\podcast.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>{{ReFormat(podcast.title, 0)}}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding class="card-background-page">\n	<ion-card>\n      <img src="{{podcast.coverImage}}" class="tinted">\n\n      <p class="card-date">\n        {{podcast.pubDate }}/{{podcast.pubDate | slice:8:10}}/{{podcast.pubDate }}\n      </p>\n\n      <h5 class="card-subtitle">\n        {{ReFormat(podcast.title, 1)}}\n      </h5>\n\n      <button ion-button color="light" round class="downloadbtn" (click)="Download(podcast.mp3, podcast.pubDate)">\n        <ion-icon name=\'md-download\' is-active="false"></ion-icon>\n      </button>\n      <button (click)="addToFav(podcast)" ion-button color="light" clear icon-only class="favbtn">\n        <ion-icon *ngIf="podcast.userData.favorite" name=\'star\' is-active="true"></ion-icon>\n        <ion-icon *ngIf="!podcast.userData.favorite" name=\'star-outline\' is-active="true"></ion-icon>\n      </button>\n\n      <button ion-button  color="green" round align-item-start class="playbtn" (click)="PlayPodcast(podcast.pubDate, podcast.mp3, ReFormat(podcast.title, 0), ReFormat(podcast.title, 1), 0)">\n          <ion-icon name=\'md-play\' is-active="false"></ion-icon>\n      </button>\n    </ion-card>\n    <div text-center style="padding-bottom: 7px;">\n    	0:23\n    	<progress value="20" max="100"></progress>\n    	{{podcast.duration }}\n    </div>\n    <ion-item text-wrap inset><p class="newLines">{{ReFormat(podcast.description, 2)}}</p></ion-item>\n</ion-content>\n'/*ion-inline-end:"C:\Users\root\Documents\Ionic\THC\src\pages\podcast\podcast.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_5__ionic_native_file__["a" /* File */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__ionic_native_file__["a" /* File */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__providers_player_player__["a" /* PlayerProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__providers_player_player__["a" /* PlayerProvider */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__providers_storage_storage__["a" /* StorageProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__providers_storage_storage__["a" /* StorageProvider */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]) === "function" && _f || Object])
    ], PodcastPage);
    return PodcastPage;
    var _a, _b, _c, _d, _e, _f;
}());

//# sourceMappingURL=podcast.js.map

/***/ }),

/***/ 122:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 122;

/***/ }),

/***/ 166:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/favorites/favorites.module": [
		296,
		2
	],
	"../pages/podcast/podcast.module": [
		297,
		1
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 166;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 218:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_cache__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_rss_rss__ = __webpack_require__(219);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_storage_storage__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_player_player__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_storage__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_file__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__podcast_podcast__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_toast__ = __webpack_require__(86);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var HomePage = /** @class */ (function () {
    function HomePage(toast, actionSheetCtrl, file, _storage, storage, cache, navCtrl, navParams, rssProvider, player) {
        var _this = this;
        this.toast = toast;
        this.actionSheetCtrl = actionSheetCtrl;
        this.file = file;
        this._storage = _storage;
        this.storage = storage;
        this.cache = cache;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.rssProvider = rssProvider;
        this.player = player;
        this.searching = false;
        this.rssDataArray = [];
        //this.Get_RSS_Feed();
        this.rssProvider.GetCached().then(function (data) {
            if (data) {
                console.log('yes');
                _this.rssDataArray = data;
            }
            else {
                console.log('no');
                _this.Get_RSS_Feed();
            }
        });
    }
    HomePage.prototype.SearchFor = function (event) {
        console.log(event);
    };
    HomePage.prototype.Search = function () {
        return this.searching = true;
    };
    HomePage.prototype.ShowActionSheet = function () {
        var _this = this;
        console.log('showing action sheet');
        var actionSheet = this.actionSheetCtrl.create({
            //title: 'test',
            buttons: [
                {
                    text: 'Refresh',
                    handler: function () {
                        console.log('refresh from action sheet');
                        //Toast('Looking for new podcasts...');
                        _this.ForceReload();
                    }
                }
            ]
        });
        actionSheet.present();
    };
    HomePage.prototype.itemTapped = function (event, podcast) {
        // That's right, we're pushing to ourselves!
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__podcast_podcast__["a" /* PodcastPage */], {
            podcast: podcast,
            podcasts: this.rssDataArray
        });
    };
    HomePage.prototype.ForceReload = function (refresher) {
        var _this = this;
        this.rssProvider.GetRSS().then(function (data) {
            _this.rssDataArray = data;
            console.log(data);
            if (refresher) {
                setTimeout(function () {
                    refresher.complete();
                }, 2000);
            }
        });
    };
    HomePage.prototype.Get_RSS_Feed = function () {
        var _this = this;
        this.rssProvider.GetRSS().then(function (data) {
            console.log('got', data);
            _this.rssDataArray = data;
        });
    };
    HomePage.prototype.ReFormat = function (title, part) {
        if (part == 0) {
            return title.split('|')[0].replace('&amp;', '&');
        }
        if (part == 1) {
            return title.split('|')[1].replace('&amp;', '&').split('-')[0];
        }
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\Users\root\Documents\Ionic\THC\src\pages\home\home.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>THC Podcasts</ion-title>\n\n    <ion-searchbar *ngIf="searching"\n\n      [(ngModel)]="searchInput"\n\n      [showCancelButton]="shouldShowCancel"\n\n      (ionInput)="SearchFor($event)"\n\n      (ion-cancel)="onCancel($event)">  \n\n    </ion-searchbar>\n\n    <ion-buttons end>\n\n      <button ion-button (click)="seaching = true;">\n\n        <ion-icon name="search" end></ion-icon>\n\n      </button>\n\n      <button ion-button>\n\n        <ion-icon name="funnel" end></ion-icon>\n\n      </button>\n\n      <button ion-button (click)="ShowActionSheet()">\n\n        <ion-icon name="more" end></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content no-padding class="card-background-page">\n\n  <ion-refresher (ionRefresh)="ForceReload($event)">\n\n    <ion-refresher-content\n\n      pullingIcon="arrow-dropdown"\n\n      pullingText="Pull to refresh"\n\n      refreshingSpinner="crescent"\n\n      refreshingText="checking for new podcasts...">\n\n    </ion-refresher-content>\n\n  </ion-refresher>\n\n  \n\n  <div *ngIf="rssDataArray">\n\n    <ion-list>\n\n      <ion-item *ngFor="let podcast of rssDataArray.podcasts" text-wrap>\n\n        <ion-thumbnail item-start>\n\n          <img src="assets/imgs/Original_Logo_iTunes3.jpg">\n\n        </ion-thumbnail>\n\n        <h2>\n\n          {{ReFormat(podcast.title, 1)}}\n\n        </h2>\n\n        <p>{{ReFormat(podcast.title, 0)}}</p>\n\n        <small>{{podcast.pubDate | slice:5:7}}/{{podcast.pubDate | slice:8:10}}/{{podcast.pubDate | slice:0:4}}</small>\n\n        <button (click)="itemTapped($event, podcast)" ion-button clear item-end color="green">View</button>\n\n      </ion-item>\n\n    </ion-list> \n\n  </div>\n\n</ion-content>\n\n\n\n'/*ion-inline-end:"C:\Users\root\Documents\Ionic\THC\src\pages\home\home.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_9__ionic_native_toast__["a" /* Toast */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */], __WEBPACK_IMPORTED_MODULE_7__ionic_native_file__["a" /* File */], __WEBPACK_IMPORTED_MODULE_6__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_4__providers_storage_storage__["a" /* StorageProvider */], __WEBPACK_IMPORTED_MODULE_2_ionic_cache__["b" /* CacheService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__providers_rss_rss__["a" /* RssProvider */], __WEBPACK_IMPORTED_MODULE_5__providers_player_player__["a" /* PlayerProvider */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 219:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RssProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__storage_storage__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_cache__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__podcast__ = __webpack_require__(295);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var RssProvider = /** @class */ (function () {
    function RssProvider(_storage, cache, http, storage) {
        this._storage = _storage;
        this.cache = cache;
        this.http = http;
        this.storage = storage;
        this.storageData = {
            podcasts: []
        };
        this.API_URL = "https://api.rss2json.com/v1/api.json";
        console.log('Hello RssProvider Provider');
    }
    RssProvider.prototype.GetCached = function () {
        var _this = this;
        console.log('getting data from local cache');
        this._storage.get('STORAGE_DATA').then(function (res) {
            if (res) {
                console.log('here', res);
                _this.storageData = res;
            }
            else {
                console.log('nada', res);
            }
        }).catch(function (err) {
            console.log('err here', err);
        });
        return this._storage.get('STORAGE_DATA');
    };
    RssProvider.prototype.GetRSS = function () {
        var _this = this;
        this.GetCached();
        var params = {
            params: new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpParams */]().set('rss_url', 'https://www.thehighersidechats.com/feed/podcast').set('api_key', 'yqkqpe8nkirfvdeijgu0arymq7panztpvf56h7hh').set('count', '1000').set('order_by', 'pubDate').set('order_dir', 'desc')
        };
        var request = this.http.get(this.API_URL, params);
        request.subscribe(function (data) {
            if (data['items']) {
                data['items'].forEach(function (podcast) {
                    var coverImage = "assets/imgs/Original_Logo_iTunes3.jpg";
                    var pcast = new __WEBPACK_IMPORTED_MODULE_5__podcast__["a" /* PodcastClass */](podcast.title, podcast.pubDate, podcast.description, coverImage, podcast.link, podcast.enclosure.link, podcast.enclosure.length, podcast.enclosure.duration, {
                        downloaded: false,
                        favorite: false,
                        listened: false,
                        listening: false,
                        lastPosition: 0,
                        filePath: ''
                    });
                    console.log(_this.storageData.podcasts.findIndex(function (i) { return i.pubDate === pcast.pubDate; }));
                    if (_this.storageData.podcasts.findIndex(function (i) { return i.pubDate === pcast.pubDate; }) < 0) {
                        console.log('found new', pcast);
                        _this.storageData.podcasts.push(pcast);
                    }
                    else {
                    }
                });
                if (_this.storageData.podcasts.length > 1) {
                    _this._storage.set('STORAGE_DATA', _this.storageData);
                    console.log('storage data', _this.storageData);
                }
                else {
                    console.log('no podcasts in array, maybe offline');
                }
            }
            else {
                console.log('no data[items]');
            }
        });
        return new Promise(function (resolve, reject) {
            if (_this.storageData.podcasts) {
                resolve(_this.storageData);
            }
            else {
                reject('no');
            }
        });
    };
    RssProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_3_ionic_cache__["b" /* CacheService */], __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_2__storage_storage__["a" /* StorageProvider */]])
    ], RssProvider);
    return RssProvider;
}());

//# sourceMappingURL=rss.js.map

/***/ }),

/***/ 220:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(221);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(239);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 239:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ionic_cache__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(294);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_home_home__ = __webpack_require__(218);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_favorites_favorites__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_podcast_podcast__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_rss_rss__ = __webpack_require__(219);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_http__ = __webpack_require__(217);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_media__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_music_controls__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__angular_common_http__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__providers_player_player__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__providers_storage_storage__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__ionic_native_file_transfer__ = __webpack_require__(173);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__ionic_native_file__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__ionic_native_toast__ = __webpack_require__(86);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_favorites_favorites__["a" /* FavoritesPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_podcast_podcast__["a" /* PodcastPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/favorites/favorites.module#FavoritesPageModule', name: 'FavoritesPage', segment: 'favorites', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/podcast/podcast.module#PodcastPageModule', name: 'PodcastPage', segment: 'podcast', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_14__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_11__angular_http__["HttpModule"],
                __WEBPACK_IMPORTED_MODULE_5_ionic_cache__["a" /* CacheModule */].forRoot()
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_favorites_favorites__["a" /* FavoritesPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_podcast_podcast__["a" /* PodcastPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_10__providers_rss_rss__["a" /* RssProvider */],
                __WEBPACK_IMPORTED_MODULE_15__providers_player_player__["a" /* PlayerProvider */],
                __WEBPACK_IMPORTED_MODULE_12__ionic_native_media__["a" /* Media */],
                __WEBPACK_IMPORTED_MODULE_13__ionic_native_music_controls__["a" /* MusicControls */],
                __WEBPACK_IMPORTED_MODULE_16__providers_storage_storage__["a" /* StorageProvider */],
                __WEBPACK_IMPORTED_MODULE_18__ionic_native_file__["a" /* File */],
                __WEBPACK_IMPORTED_MODULE_17__ionic_native_file_transfer__["a" /* FileTransfer */],
                __WEBPACK_IMPORTED_MODULE_19__ionic_native_toast__["a" /* Toast */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 294:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(218);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_favorites_favorites__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ionic_cache__ = __webpack_require__(57);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var MyApp = /** @class */ (function () {
    function MyApp(cache, platform, statusBar, splashScreen) {
        this.cache = cache;
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        this.initializeApp();
        // used for an example of ngFor and navigation
        this.pages = [
            {
                title: 'Home',
                component: __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */]
            },
            {
                title: 'Favorites',
                component: __WEBPACK_IMPORTED_MODULE_5__pages_favorites_favorites__["a" /* FavoritesPage */]
            }
        ];
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            _this.cache.setDefaultTTL(60 * 60 * 24 * 1);
            _this.cache.setOfflineInvalidate(false);
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\root\Documents\Ionic\THC\src\app\app.html"*/'<ion-menu [content]="content">\n  \n  <ion-content>\n    <ion-list no-lines>\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n        \n        <label style="padding-left: 10%;">{{p.title}}</label>\n      </button>\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"C:\Users\root\Documents\Ionic\THC\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_6_ionic_cache__["b" /* CacheService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 295:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PodcastClass; });
var PodcastClass = /** @class */ (function () {
    function PodcastClass(title, pubDate, description, coverImage, link, mp3, length, duration, userData) {
        this.title = title;
        this.pubDate = pubDate;
        this.description = description;
        this.coverImage = coverImage;
        this.link = link;
        this.mp3 = mp3;
        this.length = length;
        this.duration = duration;
        this.userData = userData;
    }
    return PodcastClass;
}());

//# sourceMappingURL=podcast.js.map

/***/ }),

/***/ 51:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StorageProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_file_transfer__ = __webpack_require__(173);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_file__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_toast__ = __webpack_require__(86);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/*
  Generated class for the StorageProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var StorageProvider = /** @class */ (function () {
    function StorageProvider(toast, transfer, file, http, storage) {
        this.toast = toast;
        this.transfer = transfer;
        this.file = file;
        this.http = http;
        this.storage = storage;
        console.log('Hello StorageProvider Provider');
    }
    StorageProvider.prototype.Toast = function (text) {
        this.toast.show(text, '5000', 'center').subscribe(function (toast) {
            console.log(toast);
        });
    };
    StorageProvider.prototype.IsDownloaded = function (file) {
        console.log('looking for file...', file);
        return this.file.checkFile(this.file.dataDirectory, file);
    };
    StorageProvider.prototype.Download = function (url, date) {
        var _this = this;
        this.file.checkFile(this.file.dataDirectory, date + '.mp3').then(function (file) {
            console.log('found file. No need to download', file);
        }).catch(function (err) {
            console.log('no file found. Downloading');
            var fileTransfer = _this.transfer.create();
            _this.toast.show(url + ', ' + _this.file.dataDirectory + date + '.mp3', '5000', 'center').subscribe(function (toast) {
                console.log(toast);
            });
            fileTransfer.onProgress(function (progress) { return console.log(Math.round(((progress.loaded / progress.total) * 100))); });
            fileTransfer.download(url, _this.file.dataDirectory + date + '.mp3').then(function (entry) {
                console.log('download complete: ' + entry.toURL());
                _this.toast.show('download complete: ' + entry.toURL(), '5000', 'center').subscribe(function (toast) {
                    console.log(toast);
                });
                _this.Set(date, _this.file.dataDirectory + date + '.mp3');
            }, function (error) {
                console.log(error);
                _this.toast.show('error ' + error, '5000', 'center').subscribe(function (toast) {
                    console.log(toast);
                });
            });
        });
    };
    StorageProvider.prototype.Set = function (key, val) {
        return this.storage.set(key, val);
    };
    StorageProvider.prototype.Get = function (key) {
        return this.storage.get(key);
    };
    StorageProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__ionic_native_toast__["a" /* Toast */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_file_transfer__["a" /* FileTransfer */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_file__["a" /* File */], __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */]])
    ], StorageProvider);
    return StorageProvider;
}());

//# sourceMappingURL=storage.js.map

/***/ }),

/***/ 84:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlayerProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_media__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_music_controls__ = __webpack_require__(172);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/*
  Generated class for the PlayerProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var PlayerProvider = /** @class */ (function () {
    function PlayerProvider(http, media, musicControls) {
        this.http = http;
        this.media = media;
        this.musicControls = musicControls;
    }
    PlayerProvider.prototype.Stop = function () {
        if (this.playingNow) {
            this.playingNow.stop();
            this.playingNow.release();
        }
    };
    PlayerProvider.prototype.Play = function (podcast, author, title, image) {
        var _this = this;
        var file = this.media.create(podcast);
        this.Stop();
        this.playingNow = file;
        this.musicControls.create({
            track: title,
            artist: 'Greg Carlwood & ' + author,
            cover: 'assets/imgs/Original_Logo_iTunes3.jpg',
            // cover can be a local path (use fullpath 'file:///storage/emulated/...', or only 'my_image.jpg' if my_image.jpg is in the www folder of your app)
            //           or a remote url ('http://...', 'https://...', 'ftp://...')
            isPlaying: true,
            dismissable: false,
            // hide previous/next/close buttons:
            hasPrev: false,
            hasNext: false,
            hasClose: true,
            // iOS only, optional
            album: 'Absolution',
            duration: 60,
            elapsed: 10,
            hasSkipForward: true,
            hasSkipBackward: true,
            skipForwardInterval: 15,
            skipBackwardInterval: 15,
            hasScrubbing: false,
            // Android only, optional
            // text displayed in the status bar when the notification (and the ticker) are updated, optional
            ticker: 'Now playing ' + title,
            // All icons default to their built-in android equivalents
            playIcon: 'media_play',
            pauseIcon: 'media_pause',
            prevIcon: 'media_prev',
            nextIcon: 'media_next',
            closeIcon: 'media_close',
            notificationIcon: 'notification'
        }).then(function (res) {
            _this.musicControls.updateIsPlaying(true);
        });
        file.play();
        console.log('playing', podcast, file);
        //this.musicControls.updateIsPlaying(true);
        this.musicControls.subscribe().subscribe(function (action) {
            var message = JSON.parse(action).message;
            switch (message) {
                case 'music-controls-next':
                    break;
                case 'music-controls-previous':
                    break;
                case 'music-controls-pause':
                    file.pause();
                    _this.musicControls.updateIsPlaying(false);
                    break;
                case 'music-controls-play':
                    file.play();
                    _this.musicControls.updateIsPlaying(true);
                    break;
                case 'music-controls-destroy':
                    _this.Stop();
                    break;
                default:
                    console.log(action);
                    break;
            }
        });
        this.musicControls.listen();
    };
    PlayerProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_media__["a" /* Media */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_music_controls__["a" /* MusicControls */]])
    ], PlayerProvider);
    return PlayerProvider;
}());

//# sourceMappingURL=player.js.map

/***/ })

},[220]);
//# sourceMappingURL=main.js.map