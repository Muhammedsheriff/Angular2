import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchTitle'
})
export class SearchTitlePipe implements PipeTransform {

  transform(news:any, term:string): any {

      if(term == undefined)
        {
          return news
        }
        else
        {
       return news.filter( function(news){
         return news.title.includes(term)
       })   
        }
    }

}
