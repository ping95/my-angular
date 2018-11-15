import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { splitClasses } from '@angular/compiler';
import { PostService } from 'services/post.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts: any[];

  constructor(private service : PostService) { 
  }

  ngOnInit() {
    this.service.getPost()
      .subscribe(
        Response => {
          this.posts = Response.json();
          }, error => { 
            alert('An unexpected error occurred.');
            console.log(error);
        }
      );
  }

  createPost(input) {
    let title = { title : input.value };
    input.value = '';
    
    this.service.createPost(input)
      .subscribe(response => {
        title['id'] = response.json().id;
        this.posts.splice(0,0, title);
        console.log(response.json()); 
      })
  }

  onUpdate(item) {
    this.service.onUpdate(item)
      .subscribe(
        Response => {
          this.posts = Response.json();
          }, error => { 
            alert('An unexpected error occurred.');
            console.log(error);
          }  
      );
  }

  createDelete(item) {
    this.service.onDelete(item)
      .subscribe(response => {
        let index = this.posts.indexOf(item);
        this.posts.splice(index,1);
      }, 
      error => {
        if (error.status == 404)
        {
          // expected error
          alert('The post has already been deleted.');
        }  
        else
        {
          // unexpected error
          alert('An unexpected error occurred.');
        }

      })
  }  

}
