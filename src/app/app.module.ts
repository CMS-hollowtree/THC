import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { CacheModule } from 'ionic-cache';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { PodcastPage } from '../pages/podcast/podcast';

import { RssProvider } from '../providers/rss/rss';
import { HttpModule } from '@angular/http';

import { Media } from '@ionic-native/media';
import { MusicControls } from '@ionic-native/music-controls';

import { HttpClientModule } from '@angular/common/http';
import { PlayerProvider } from '../providers/player/player';
import { StorageProvider } from '../providers/storage/storage';
import { FileTransfer } from '@ionic-native/file-transfer';
import { File } from '@ionic-native/file';
import { Toast } from '@ionic-native/toast';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    PodcastPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule,
    HttpModule,
    CacheModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    PodcastPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    RssProvider,
    PlayerProvider,
    Media,
    MusicControls,
    StorageProvider,
    File,
    FileTransfer,
    Toast
  ]
})
export class AppModule {}
