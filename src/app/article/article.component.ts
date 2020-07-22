import { Component, OnInit } from '@angular/core';
import {NewsDataService} from '../news-data.service'
@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  ay7aga:any[]=[]
  constructor( _news:NewsDataService) {

    this.ay7aga = _news.getClients();
   }

  ngOnInit() {
  }

}
