import { Component, OnInit } from '@angular/core';
import{NewsDataService} from '../news-data.service'
@Component({
  selector: 'app-sources',
  templateUrl: './sources.component.html',
  styleUrls: ['./sources.component.css']
})
export class SourcesComponent implements OnInit {

  sources:any[] =[]
  constructor(private _news:NewsDataService) {

    this._news.getSources().subscribe(data2 => this.sources =data2.sources )
   }

  ngOnInit() {
  }

}
