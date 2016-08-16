import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController } from 'ionic-angular';
import {NewsService} from "../../providers/news-service/news-service";
import {DetailPage} from "../detail/detail";

@Component({
  templateUrl: 'build/pages/page2/page2.html',
  providers:[NewsService]
})
export class Page2 {
  public news:any;
  icons: string[];
  items: Array<{title: string, note: string, icon: string}>;

  constructor(public navCtrl: NavController, private newsData : NewsService, private loadingCtrl : LoadingController) {

  }

  ionViewWillEnter(){
    let loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });
    this.loadNews();
    loading.present();

    setTimeout(() => {
      loading.dismiss();
    }, 1000);
  }

  loadNews(){
    this.newsData.load()
        .then(data => {
          this.news = data;
        });
  }

  itemTapped(event, item) {
    this.navCtrl.push(DetailPage, {
      item: item
    });
  }


}
