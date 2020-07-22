import { Component, OnInit } from '@angular/core';
import {NewsDataService} from '../news-data.service'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  news:any[]=[];
  
  constructor(private _news:NewsDataService ) {


  // this._news.getNews().subscribe( data =>this.news = data.articles )
   this._news.getNews().subscribe( data =>{

    for(var i=0;i<data.articles.length;i++)
      {


     if(data.articles[i].urlToImage != null)
      {
        this.news.push(data.articles[i])
      }

      }
   } )

}

  ngOnInit() {
  }

}
