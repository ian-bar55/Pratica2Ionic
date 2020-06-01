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
  valordabarra: number;
  exibeBarra: boolean;
  private index: number = 0;
  private readonly offset: number = 15;
  postsPage: any[];

  constructor(private postService: PostsService) { 
    this.inicializarBarraProgresso;
    this.countdownBarraProgresso;
  }

  async ngOnInit() {
    let resposta = await this.postService.getPosts();
    this.posts = resposta;
    this.postsPage = this.posts.slice(this.index,this.offset+this.index);
    this.index += this.offset;

  }

  inicializarBarraProgresso(){
    this.exibeBarra = true;
    setInterval(() => {
      this.valordabarra += 0.25;
    }, 500)
  }
  countdownBarraProgresso(){
    setTimeout(() => {
      this.exibeBarra = false;
    }, 2000)
  }
  loadData(event) {
    setTimeout(() => {
      let newPosts = this.posts.slice(this.index,this.offset+this.index);
      this.index += this.offset;
      
      for (let i=0;i<newPosts.length;i++) {
        this.postsPage.push(newPosts[i]);
      }
      event.target.complete();
      if (this.postsPage.length == this.posts.length) {
        event.target.disabled = true;
      }
    }, 500);
  }
}
