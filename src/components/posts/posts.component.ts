import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {isAuth} from "../../services/isAuth";
import {PostsService} from "../../services/posts.service";
import {Observable} from "rxjs";
import {IPost} from "../../models/post";

@Component({
  selector: 'posts',
  templateUrl: './posts.component.html',

})
export class PostsComponent implements OnInit {
  posts$:Observable<IPost[]>
  constructor(private router: Router, public isAuth:isAuth, private postsService:PostsService) { }

  ngOnInit(): void {
    this.posts$= this.postsService.getAll()
  }

  goToPost(id: number):void {
    this.router.navigate(['/posts', id]);
  }
}
