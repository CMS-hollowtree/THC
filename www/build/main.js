webpackJsonp([3],{

/***/ 113:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FavoritesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_rss_rss__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__podcast_podcast__ = __webpack_require__(57);
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
let FavoritesPage = class FavoritesPage {
    constructor(rssProvider, navCtrl, navParams) {
        this.rssProvider = rssProvider;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.favPodcasts = [];
        this.rssProvider.GetCached().then((data) => {
            if (data) {
                console.log('yes favs');
                var result = data.podcasts.filter(obj => {
                    return obj.userData.favorite === true;
                });
                // let index = data.podcasts.findIndex(i => i.userData.favorite === true);
                this.favPodcasts = result;
                this.hasFavs = true;
            }
            else {
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
                    return obj.userData.favorite === true;
                });
                // let index = data.podcasts.findIndex(i => i.userData.favorite === true);
                this.favPodcasts = result;
                this.hasFavs = true;
            }
            else {
                console.log('no favs');
                this.hasFavs = false;
            }
        });
    }
    itemTapped(event, podcast) {
        // That's right, we're pushing to ourselves!
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__podcast_podcast__["a" /* PodcastPage */], {
            podcast: podcast
        });
    }
    ReFormat(title, part) {
        if (part == 0) {
            return title.split('|')[0].replace('&amp;', '&');
        }
        if (part == 1) {
            return title.split('|')[1].replace('&amp;', '&').split('-')[0];
        }
    }
};
FavoritesPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
        selector: 'page-favorites',template:/*ion-inline-start:"C:\Users\root\Documents\Ionic\THC\src\pages\favorites\favorites.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Favorites</ion-title>\n    <ion-buttons end>\n      <button ion-button>\n        <ion-icon (click)="Search()" name="search" end></ion-icon>\n      </button>\n      <button ion-button>\n        <ion-icon (click)="Sort()" name="funnel" end></ion-icon>\n      </button>\n      <button ion-button>\n        <ion-icon (click)="More()" name="more" end></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <label padding style="position: absolute; top: 40%; color: grey;" *ngIf="!hasFavs" text-center>\n    no favorites found...try adding a podcast from the home page!\n  </label>\n  <ion-list *ngIf="favPodcasts">\n    <ion-item *ngFor="let podcast of favPodcasts" text-wrap>\n      <ion-thumbnail item-start>\n        <img src="assets/imgs/Original_Logo_iTunes3.jpg">\n      </ion-thumbnail>\n      <h2>\n        {{ReFormat(podcast.title, 1)}}\n      </h2>\n      <p>{{ReFormat(podcast.title, 0)}}</p>\n      <small>{{podcast.pubDate | slice:5:7}}/{{podcast.pubDate | slice:8:10}}/{{podcast.pubDate | slice:0:4}}</small>\n      <button (click)="itemTapped($event, podcast)" ion-button clear item-end color="green">View</button>\n    </ion-item>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"C:\Users\root\Documents\Ionic\THC\src\pages\favorites\favorites.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers_rss_rss__["a" /* RssProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
], FavoritesPage);

//# sourceMappingURL=favorites.js.map

/***/ }),

/***/ 124:
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
webpackEmptyAsyncContext.id = 124;

/***/ }),

/***/ 168:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/favorites/favorites.module": [
		306,
		2
	],
	"../pages/podcast/podcast.module": [
		308,
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
webpackAsyncContext.id = 168;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 220:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_cache__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_rss_rss__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_storage_storage__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_player_player__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_storage__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__podcast_podcast__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_toast__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_admob_free__ = __webpack_require__(91);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};











let HomePage = class HomePage {
    constructor(adMob, toast, actionSheetCtrl, _storage, storage, cache, navCtrl, navParams, rssProvider, player) {
        this.adMob = adMob;
        this.toast = toast;
        this.actionSheetCtrl = actionSheetCtrl;
        this._storage = _storage;
        this.storage = storage;
        this.cache = cache;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.rssProvider = rssProvider;
        this.player = player;
        this.searching = false;
        this.rssDataArray = [];
        this.searchResults = [];
        this.searchTerm = '';
        this.rssProvider.GetCached().then((data) => {
            if (data) {
                console.log('yes');
                this.rssDataArray = data;
            }
            else {
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
    ShowBannerAd() {
        return __awaiter(this, void 0, void 0, function* () {
            const bannerConfig = {
                //id: 'ca-app-pub-3940256099942544/6300978111',
                id: 'ca-app-pub-0529413882147962/2320999051',
                //isTesting: false,
                autoShow: true,
            };
            this.adMob.banner.config(bannerConfig);
            try {
                const result = yield this.adMob.banner.prepare();
                console.log(result);
            }
            catch (e) {
                console.log(e);
            }
        });
    }
    ShowFullAd() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const interstitialConfig = {
                    //id: 'ca-app-pub-3940256099942544/1033173712',
                    id: 'ca-app-pub-0529413882147962/6907111325',
                    autoShow: true
                };
                this.adMob.interstitial.config(interstitialConfig);
                const result = yield this.adMob.interstitial.prepare();
                console.log(result);
            }
            catch (e) {
                console.log(e);
            }
        });
    }
    SortItems() {
        return this.rssDataArray.podcasts = this.rssDataArray.podcasts.reverse();
    }
    filterItems(searchTerm) {
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
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__podcast_podcast__["a" /* PodcastPage */], {
            podcast: podcast
        });
    }
    ForceReload(refresher) {
        this.rssProvider.GetRSS().then(data => {
            this.rssDataArray = data;
            console.log(data);
            if (refresher) {
                setTimeout(function () {
                    refresher.complete();
                }, 3500);
            }
        });
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
        }
        if (part == 1) {
            return title.split('|')[1].replace('&amp;', '&').split('-')[0];
        }
    }
};
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
        selector: 'page-home',template:/*ion-inline-start:"C:\Users\root\Documents\Ionic\THC\src\pages\home\home.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title *ngIf="!searching">THC Podcasts</ion-title>\n\n    <ion-searchbar *ngIf="searching"\n\n      [(ngModel)]="searchTerm" \n\n      (ionInput)="SetFilteredPodcasts()"\n\n      [showCancelButton]="shouldShowCancel"\n\n      (ion-cancel)="onCancel($event)">  \n\n    </ion-searchbar>\n\n    <ion-buttons end>\n\n      <button ion-button (click)="Search()">\n\n        <ion-icon name="search" end></ion-icon>\n\n      </button>\n\n      <button *ngIf="!searching" ion-button (click)="SortItems()">\n\n        <ion-icon name="funnel" end></ion-icon>\n\n      </button>\n\n      <button *ngIf="!searching" ion-button (click)="ShowActionSheet()">\n\n        <ion-icon name="more" end></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n  <ion-refresher (ionRefresh)="ForceReload($event)">\n\n    <ion-refresher-content\n\n      pullingIcon="arrow-dropdown"\n\n      pullingText="Pull to refresh"\n\n      refreshingSpinner="crescent"\n\n      refreshingText="checking for new podcasts...">\n\n    </ion-refresher-content>\n\n  </ion-refresher>\n\n\n\n  <label text-center padding style="position: absolute; top: 40%; color: grey;" *ngIf="!rssDataArray.podcasts" >\n\n    no podcasts found...pull down to refresh\n\n  </label>\n\n  \n\n  <div *ngIf="rssDataArray">\n\n    <ion-list *ngIf="!searching">\n\n      <ion-item *ngFor="let podcast of rssDataArray.podcasts" text-wrap>\n\n        <ion-thumbnail item-start>\n\n          <img src="assets/imgs/Original_Logo_iTunes3.jpg">\n\n        </ion-thumbnail>\n\n        <h2>\n\n          {{ReFormat(podcast.title, 1)}}\n\n        </h2>\n\n        <p>{{ReFormat(podcast.title, 0)}}</p>\n\n        <small>{{podcast.pubDate | slice:5:7}}/{{podcast.pubDate | slice:8:10}}/{{podcast.pubDate | slice:0:4}}</small>\n\n        <button (click)="itemTapped($event, podcast)" ion-button clear item-end color="green">View</button>\n\n      </ion-item>\n\n    </ion-list> \n\n\n\n    <ion-list *ngIf="searching">\n\n      <ion-item *ngFor="let podcast of searchResults" text-wrap>\n\n        <ion-thumbnail item-start>\n\n          <img src="assets/imgs/Original_Logo_iTunes3.jpg">\n\n        </ion-thumbnail>\n\n        <h2>\n\n          {{ReFormat(podcast.title, 1)}}\n\n        </h2>\n\n        <p>{{ReFormat(podcast.title, 0)}}</p>\n\n        <small>{{podcast.pubDate | slice:5:7}}/{{podcast.pubDate | slice:8:10}}/{{podcast.pubDate | slice:0:4}}</small>\n\n        <button (click)="itemTapped($event, podcast)" ion-button clear item-end color="green">View</button>\n\n      </ion-item>\n\n    </ion-list>\n\n  </div>\n\n</ion-content>\n\n\n\n'/*ion-inline-end:"C:\Users\root\Documents\Ionic\THC\src\pages\home\home.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_9__ionic_native_admob_free__["a" /* AdMobFree */], __WEBPACK_IMPORTED_MODULE_8__ionic_native_toast__["a" /* Toast */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */], __WEBPACK_IMPORTED_MODULE_6__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_4__providers_storage_storage__["a" /* StorageProvider */], __WEBPACK_IMPORTED_MODULE_2_ionic_cache__["b" /* CacheService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__providers_rss_rss__["a" /* RssProvider */], __WEBPACK_IMPORTED_MODULE_5__providers_player_player__["a" /* PlayerProvider */]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 221:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(222);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(240);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 240:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(218);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(219);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ionic_cache__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_admob_free__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__(296);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_home_home__ = __webpack_require__(220);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_favorites_favorites__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_podcast_podcast__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_rss_rss__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__angular_http__ = __webpack_require__(176);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_media__ = __webpack_require__(177);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_native_music_controls__ = __webpack_require__(178);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__angular_common_http__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__providers_player_player__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__providers_storage_storage__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__ionic_native_file_transfer__ = __webpack_require__(170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__ionic_native_file__ = __webpack_require__(173);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__ionic_native_toast__ = __webpack_require__(89);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





















let AppModule = class AppModule {
};
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_8__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_favorites_favorites__["a" /* FavoritesPage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_podcast_podcast__["a" /* PodcastPage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */], {}, {
                links: [
                    { loadChildren: '../pages/favorites/favorites.module#FavoritesPageModule', name: 'FavoritesPage', segment: 'favorites', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/podcast/podcast.module#PodcastPageModule', name: 'PodcastPage', segment: 'podcast', priority: 'low', defaultHistory: [] }
                ]
            }),
            __WEBPACK_IMPORTED_MODULE_15__angular_common_http__["b" /* HttpClientModule */],
            __WEBPACK_IMPORTED_MODULE_12__angular_http__["HttpModule"],
            __WEBPACK_IMPORTED_MODULE_5_ionic_cache__["a" /* CacheModule */].forRoot()
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_8__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_favorites_favorites__["a" /* FavoritesPage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_podcast_podcast__["a" /* PodcastPage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
            __WEBPACK_IMPORTED_MODULE_11__providers_rss_rss__["a" /* RssProvider */],
            __WEBPACK_IMPORTED_MODULE_16__providers_player_player__["a" /* PlayerProvider */],
            __WEBPACK_IMPORTED_MODULE_13__ionic_native_media__["a" /* Media */],
            __WEBPACK_IMPORTED_MODULE_14__ionic_native_music_controls__["a" /* MusicControls */],
            __WEBPACK_IMPORTED_MODULE_17__providers_storage_storage__["a" /* StorageProvider */],
            __WEBPACK_IMPORTED_MODULE_19__ionic_native_file__["a" /* File */],
            __WEBPACK_IMPORTED_MODULE_18__ionic_native_file_transfer__["a" /* FileTransfer */],
            __WEBPACK_IMPORTED_MODULE_20__ionic_native_toast__["a" /* Toast */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_admob_free__["a" /* AdMobFree */]
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 278:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class PodcastClass {
    constructor(title, pubDate, description, coverImage, link, mp3, length, duration, userData) {
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
}
/* harmony export (immutable) */ __webpack_exports__["a"] = PodcastClass;

//# sourceMappingURL=podcast.js.map

/***/ }),

/***/ 296:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(219);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(218);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(220);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_favorites_favorites__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ionic_cache__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_observable_timer__ = __webpack_require__(297);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_observable_timer___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_observable_timer__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








let MyApp = class MyApp {
    constructor(cache, platform, statusBar, splashScreen) {
        this.cache = cache;
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        this.showSplash = true;
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
    initializeApp() {
        this.platform.ready().then(() => {
            this.cache.setDefaultTTL(60 * 60 * 24 * 1);
            this.cache.setOfflineInvalidate(false);
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            this.statusBar.styleDefault();
            this.splashScreen.hide();
            Object(__WEBPACK_IMPORTED_MODULE_7_rxjs_observable_timer__["timer"])(3000).subscribe(() => this.showSplash = false);
        });
    }
    openPage(page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    }
};
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Nav */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Nav */])
], MyApp.prototype, "nav", void 0);
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\root\Documents\Ionic\THC\src\app\app.html"*/'\n<div *ngIf="showSplash" class="splash">\n\n	<div class=\'demo\'>\n	  <div class=\'circle\'>\n	    <div class=\'inner\'></div>\n	  </div>\n	  <div class=\'circle\'>\n	    <div class=\'inner\'></div>\n	  </div>\n	  <div class=\'circle\'>\n	    <div class=\'inner\'></div>\n	  </div>\n	  <div class=\'circle\'>\n	    <div class=\'inner\'></div>\n	  </div>\n	  <div class=\'circle\'>\n	    <div class=\'inner\'></div>\n	  </div>\n	</div>\n	\n</div>\n\n<ion-menu [content]="content">\n  \n  <ion-content>\n    <ion-list no-lines>\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n        \n        <label style="padding-left: 10%;">{{p.title}}</label>\n      </button>\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"C:\Users\root\Documents\Ionic\THC\src\app\app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_6_ionic_cache__["b" /* CacheService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 51:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StorageProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_file_transfer__ = __webpack_require__(170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_file__ = __webpack_require__(173);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_toast__ = __webpack_require__(89);
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
let StorageProvider = class StorageProvider {
    constructor(toast, transfer, file, http, storage) {
        this.toast = toast;
        this.transfer = transfer;
        this.file = file;
        this.http = http;
        this.storage = storage;
        console.log('Hello StorageProvider Provider');
    }
    Toast(text) {
        this.toast.show(text, '5000', 'center').subscribe(toast => {
            console.log(toast);
        });
    }
    IsDownloaded(file) {
        console.log('looking for file...', file);
        return this.file.checkFile(this.file.dataDirectory, file);
    }
    Download(url, date) {
        this.file.checkFile(this.file.dataDirectory, date + '.mp3').then((file) => {
            console.log('found file. No need to download', file);
        }).catch((err) => {
            console.log('no file found. Downloading');
            const fileTransfer = this.transfer.create();
            this.toast.show(url + ', ' + this.file.dataDirectory + date + '.mp3', '5000', 'center').subscribe(toast => {
                console.log(toast);
            });
            fileTransfer.onProgress((progress) => console.log(Math.round(((progress.loaded / progress.total) * 100))));
            fileTransfer.download(url, this.file.dataDirectory + date + '.mp3').then((entry) => {
                console.log('download complete: ' + entry.toURL());
                this.toast.show('download complete: ' + entry.toURL(), '5000', 'center').subscribe(toast => {
                    console.log(toast);
                });
                this.Set(date, this.file.dataDirectory + date + '.mp3');
            }, (error) => {
                console.log(error);
                this.toast.show('error ' + error, '5000', 'center').subscribe(toast => {
                    console.log(toast);
                });
            });
        });
    }
    Set(key, val) {
        return this.storage.set(key, val);
    }
    Get(key) {
        return this.storage.get(key);
    }
};
StorageProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__ionic_native_toast__["a" /* Toast */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_file_transfer__["a" /* FileTransfer */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_file__["a" /* File */], __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */]])
], StorageProvider);

//# sourceMappingURL=storage.js.map

/***/ }),

/***/ 57:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PodcastPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_player_player__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_storage_storage__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_admob_free__ = __webpack_require__(91);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};






let PodcastPage = class PodcastPage {
    constructor(adMob, player, storage, _storage, navCtrl, navParams) {
        this.adMob = adMob;
        this.player = player;
        this.storage = storage;
        this._storage = _storage;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
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
    ShowFullAd() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const interstitialConfig = {
                    //id: 'ca-app-pub-3940256099942544/1033173712',
                    id: 'ca-app-pub-0529413882147962/6907111325',
                    autoShow: true
                };
                this.adMob.interstitial.config(interstitialConfig);
                const result = yield this.adMob.interstitial.prepare();
                console.log(result);
            }
            catch (e) {
                console.log(e);
            }
        });
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
            }
            else {
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
        if (this.isPlaying) {
            this.player.Pause();
            this.isPlaying = 'paused';
        }
    }
    PlayPodcast(podcast, author) {
        if (this.isPlaying) {
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
        if (this.isPlaying) {
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
        }
        if (part == 1) {
            return title.split('|')[1].replace('&amp;', '&').split('-')[0];
        }
        if (part == 2) {
            return title.replace(/&amp;/g, '&');
        }
    }
};
PodcastPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
        selector: 'page-podcast',template:/*ion-inline-start:"C:\Users\root\Documents\Ionic\THC\src\pages\podcast\podcast.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>{{ReFormat(podcast.title, 0)}}</ion-title>\n    <ion-buttons end>\n    <button (click)="addToFav(podcast)" round clear ion-button icon-only class="favbtn">\n      <ion-icon *ngIf="podcast.userData.favorite" name=\'heart\' color="danger" is-active="true"></ion-icon>\n      <ion-icon *ngIf="!podcast.userData.favorite" name=\'heart\' color="light" is-active="false"></ion-icon>\n    </button>\n  </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding class="card-background-page">\n	<ion-card>\n      <img src="{{podcast.coverImage}}" class="tinted">\n\n      <p class="card-date">\n        {{podcast.pubDate | slice:5:7}}/{{podcast.pubDate | slice:8:10}}/{{podcast.pubDate | slice:0:4}}\n      </p>\n\n      <h5 class="card-subtitle">\n        {{ReFormat(podcast.title, 1)}}\n      </h5>\n\n      <button style="display: none;"ion-button color="light" round class="downloadbtn" (click)="Download(podcast.mp3, podcast.pubDate)">\n        <ion-icon name=\'md-download\' is-active="false"></ion-icon>\n      </button>\n    </ion-card>\n\n    <ion-fab bottom right>\n      <button *ngIf="!isPlaying" ion-fab color="green" (click)="PlayPodcast(podcast, ReFormat(podcast.title, 1))">\n        <ion-icon name="md-play"></ion-icon>\n      </button>\n      <button *ngIf="isPlaying" ion-fab color="danger" (click)="StopPodcast()">\n        <ion-icon name="square"></ion-icon>\n      </button>\n    </ion-fab>\n      \n    <ion-item no-lines>\n    	<div item-left>Podcast Length {{podcast.duration | slice:0:4}}</div>\n    </ion-item>\n    <ion-item no-lines text-wrap inset><p class="newLines">{{ReFormat(podcast.description, 2)}}</p></ion-item>\n</ion-content>\n'/*ion-inline-end:"C:\Users\root\Documents\Ionic\THC\src\pages\podcast\podcast.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__ionic_native_admob_free__["a" /* AdMobFree */], __WEBPACK_IMPORTED_MODULE_3__providers_player_player__["a" /* PlayerProvider */], __WEBPACK_IMPORTED_MODULE_4__providers_storage_storage__["a" /* StorageProvider */], __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
], PodcastPage);

//# sourceMappingURL=podcast.js.map

/***/ }),

/***/ 86:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RssProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__storage_storage__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_cache__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__podcast__ = __webpack_require__(278);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






let RssProvider = class RssProvider {
    constructor(_storage, cache, http, storage) {
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
    GetCached() {
        console.log('getting data from local cache');
        this._storage.get('STORAGE_DATA').then((res) => {
            if (res) {
                console.log('here', res);
                this.storageData = res;
            }
            else {
                console.log('nada', res);
            }
        }).catch((err) => {
            console.log('err here', err);
        });
        return this._storage.get('STORAGE_DATA');
    }
    GetRSS() {
        this.GetCached();
        const params = {
            params: new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpParams */]().set('rss_url', 'https://www.thehighersidechats.com/feed/podcast').set('api_key', 'yqkqpe8nkirfvdeijgu0arymq7panztpvf56h7hh').set('count', '500').set('order_by', 'pubDate').set('order_dir', 'desc')
        };
        let request = this.http.get(this.API_URL, params);
        request.subscribe(data => {
            if (data['items']) {
                data['items'].forEach((podcast) => {
                    let coverImage = "assets/imgs/Original_Logo_iTunes3.jpg";
                    let pcast = new __WEBPACK_IMPORTED_MODULE_5__podcast__["a" /* PodcastClass */](podcast.title, podcast.pubDate, podcast.description, coverImage, podcast.link, podcast.enclosure.link, podcast.enclosure.length, podcast.enclosure.duration, {
                        downloaded: false,
                        favorite: false,
                        listened: false,
                        listening: false,
                        lastPosition: 0,
                        filePath: ''
                    });
                    console.log(this.storageData.podcasts.findIndex(i => i.pubDate === pcast.pubDate));
                    if (this.storageData.podcasts.findIndex(i => i.pubDate === pcast.pubDate) < 0) {
                        console.log('found new', pcast);
                        this.storageData.podcasts.unshift(pcast);
                    }
                    else {
                    }
                });
                if (this.storageData.podcasts.length > 1) {
                    this._storage.set('STORAGE_DATA', this.storageData);
                    console.log('storage data', this.storageData);
                }
                else {
                    console.log('no podcasts in array, maybe offline');
                }
            }
            else {
                console.log('no data[items]');
            }
        });
        return new Promise((resolve, reject) => {
            if (this.storageData.podcasts) {
                resolve(this.storageData);
            }
            else {
                reject('no');
            }
        });
    }
};
RssProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_3_ionic_cache__["b" /* CacheService */], __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_2__storage_storage__["a" /* StorageProvider */]])
], RssProvider);

//# sourceMappingURL=rss.js.map

/***/ }),

/***/ 90:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlayerProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_media__ = __webpack_require__(177);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_music_controls__ = __webpack_require__(178);
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
let PlayerProvider = class PlayerProvider {
    constructor(http, media, musicControls) {
        this.http = http;
        this.media = media;
        this.musicControls = musicControls;
    }
    GetPlayerStatus() {
        if (this.playingNow) {
            console.log('playing now yes', this.playingNow);
            return true;
        }
        else {
            console.log('playing now no', this.playingNow);
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
        const file = this.media.create(podcast);
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
};
PlayerProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_media__["a" /* Media */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_music_controls__["a" /* MusicControls */]])
], PlayerProvider);

//# sourceMappingURL=player.js.map

/***/ })

},[221]);
//# sourceMappingURL=main.js.map