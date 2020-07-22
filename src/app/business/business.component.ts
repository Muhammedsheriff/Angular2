import { Component, OnInit } from '@angular/core';
import {NewsDataService} from '../news-data.service'
@Component({
  selector: 'app-business',
  templateUrl: './business.component.html',
  styleUrls: ['./business.component.css']
})
export class BusinessComponent implements OnInit {

  business:any[]=[];
  constructor(private _news:NewsDataService) { 

    this._news.getBusiness().subscribe(data =>this.business = data.articles)
  }

  ngOnInit() {
  }

}
