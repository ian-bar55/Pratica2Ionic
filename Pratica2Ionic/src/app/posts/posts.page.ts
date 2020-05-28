import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { PostsService } from '../services/posts.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.page.html',
  styleUrls: ['./posts.page.scss'],
})
@Injectable({
  providedIn: 'root'
})

export class PostsPage implements OnInit {
  posts: any;
  progressFlag: boolean;

  constructor(private postService: PostsService) { }

  ngOnInit() {
  }

}
