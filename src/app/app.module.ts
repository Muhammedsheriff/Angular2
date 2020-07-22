import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import{HttpClientModule} from '@angular/common/http'
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SourcesComponent } from './sources/sources.component';
import { ArticleComponent } from './article/article.component';
import { NavbarComponent } from './navbar/navbar.component';

import {RouterModule , Routes} from '@angular/router';
import { SearchTitlePipe } from './search-title.pipe'
import{FormsModule} from '@angular/forms';
import { BusinessComponent } from './business/business.component';
import { SportsComponent } from './sports/sports.component';
import { TechnologyComponent } from './technology/technology.component'

const appRoutes:Routes =
[
  {path:'',component:HomeComponent},
  {path:'home',component:HomeComponent},
  {path:'sources',component:SourcesComponent},
  {path:'business',component:BusinessComponent},
  {path:'sports',component:SportsComponent},
  {path:'technology',component:SourcesComponent}
  
]


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SourcesComponent,
    ArticleComponent,
    NavbarComponent,
    SearchTitlePipe,
    BusinessComponent,
    SportsComponent,
    TechnologyComponent
  ],
  imports: [
    BrowserModule,FormsModule,HttpClientModule,RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
