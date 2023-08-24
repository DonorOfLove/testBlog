import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {IPost} from "../../models/post";
import {PostsService} from "../../services/posts.service";
import {Observable} from "rxjs";
import {isAuth} from "../../services/isAuth";

@Component({
  selector: 'post',
  templateUrl: './post.component.html',
})

export class PostComponent implements OnInit {
  post: IPost
  currentPost$: Observable<IPost>

  constructor(private route: ActivatedRoute, private router: Router, private postService: PostsService,public isAuth:isAuth) {
  }

  ngOnInit():void {
    const postId = this.route.snapshot.params['id'];
    this.postService.getCurrent(postId)
    this.currentPost$ = this.postService.getCurrent(postId)
    this.currentPost$.subscribe((data) => this.post = data)
  }

  onReturnToPosts():void {
    this.router.navigate(['/posts']);
  }
}

