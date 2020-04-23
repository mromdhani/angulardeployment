import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/services/post.service';
import { IPost } from 'src/app/domain/ipost';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

   data : IPost[];

  constructor(private post: PostService) { }      // DI

  ngOnInit(): void {
     this.post.getAllPosts().subscribe( p => this.data = p );
  }

}
