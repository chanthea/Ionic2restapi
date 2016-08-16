import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {NewsService} from "../../providers/news-service/news-service";

@Component({
  templateUrl: 'build/pages/detail/detail.html',
  providers : [NewsService]
})
export class DetailPage {
    news : any;
    selectedItem: any;
  constructor(private navParam : NavParams, private newsById: NewsService) {
      this.selectedItem = navParam.get('item');
      this.loadNewsById();
  }

    loadNewsById(){
        this.newsById.loadDataById(this.selectedItem)
            .then(data => {
                this.news = data;
                console.log(this.news);
            });
    }


}
