import {Component, OnInit} from '@angular/core';
import {Observable, tap} from "rxjs";
import {IPost} from "../models/post";
import {PostsService} from "../services/posts.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls:['../styles.css']
})

export class AppComponent implements OnInit {
  title = 'posts';
  loading=false
  posts$: Observable<IPost[]>
  constructor(private postsService: PostsService) {
  }

  ngOnInit(): void {
    this.loading = true
    this.posts$= this.postsService.getAll().pipe(
      tap(()=>this.loading=false)
    )
  }
}
