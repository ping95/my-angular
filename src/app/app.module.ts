import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoursesComponent } from './courses/courses.component';
import { SliceText } from './courses/slice.pipe';
import { PostsComponent } from './posts/posts.component';

import {HttpModule} from '@angular/http';

@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    SliceText,
    PostsComponent
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
