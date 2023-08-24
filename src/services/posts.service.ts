import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IPost} from "../models/post";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})

export class PostsService {
  constructor(private http: HttpClient, private router: Router) {
  }

  getAll(): Observable<IPost[]> {
    return this.http.get<IPost[]>('https://jsonplaceholder.typicode.com/posts',)
  }

  getCurrent(id: number): Observable<IPost> {
    return this.http.get<IPost>('https://jsonplaceholder.typicode.com/posts/' + id,)
  }
}
