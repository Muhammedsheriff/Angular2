import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http'
import {Observable} from 'rxjs'
@Injectable({
  providedIn: 'root'
})
export class NewsDataService {

  constructor(private _http:HttpClient) { }
  

getNews():Observable<any>
{
  return this._http.get("https://newsapi.org/v2/top-headlines?country=eg&apiKey=d34d49ce3a794aca80d1ae821239b0eb")
}



getSources():Observable<any>
{
  return this._http.get("https://newsapi.org/v2/sources?apiKey=d34d49ce3a794aca80d1ae821239b0eb")
}


getBusiness():Observable<any>
{
  return this._http.get("https://newsapi.org/v2/top-headlines?country=eg&category=business&apiKey=d34d49ce3a794aca80d1ae821239b0eb")
}

getClients():any[]
{
   return [
    {name:'ahmed',age:25,salary:54524},
    {name:'ali',age:25,salary:54524},
    {name:'ahmed',age:25,salary:54524},
    {name:'ahmed',age:25,salary:54524},
    {name:'ahmed',age:25,salary:54524},
    {name:'ahmed',age:25,salary:54524}
    
  ]
  
}

}
