import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoursesComponent } from './courses/courses.component';
import { SliceText } from './courses/slice.pipe';
import { PostsComponent } from './posts/posts.component';

import {HttpModule} from '@angular/http';
import { AngularBasicComponent } from './courses/angular-basic/angular-basic.component';
import { TypscriptBasicComponent } from './courses/typscript-basic/typscript-basic.component';
import { IonicComponent } from './courses/ionic/ionic.component';

import { DarthComponent } from './starwars/darth';
import { LukeComponent } from './starwars/luke';
@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    SliceText,
    PostsComponent,
    AngularBasicComponent,
    TypscriptBasicComponent,
    IonicComponent,
    DarthComponent,
    LukeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
