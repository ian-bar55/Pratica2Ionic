import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class PostsService {

  urlAPIPosts = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient) { }

  async getPosts() {
    let response = await this.http.get(this.urlAPIPosts).toPromise();
    return response;
  }
}
