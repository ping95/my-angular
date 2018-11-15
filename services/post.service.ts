import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  url: string = "https://jsonplaceholder.typicode.com/posts";

  constructor(private http : Http) { }

  createPost(title) {
    return this.http.post(this.url, JSON.stringify(title));
  }  

  onUpdate(item) {
    return this.http.patch(this.url + '/' + item.id, JSON.stringify({ isRead: true}));
  }
 
  getPost() {
    return this.http.get(this.url);
  }

  onDelete(item) {
    return this.http.delete(this.url + '/' + item.id);
  }

}
