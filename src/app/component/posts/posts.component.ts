import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  constructor(private api: ApiService) { }
  public postslist: any = [];

  ngOnInit(): void {

    this.api.getPosts()
      .subscribe(res => {
        console.log(res);
        this.postslist = res.posts;
      });

    console.log(this.postslist);

  }


}

