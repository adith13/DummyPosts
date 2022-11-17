import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getPosts() {
    return this.http.get<any>("https://dummyjson.com/posts")
      .pipe(map((res: any) => {
        return res;
      }))
  }
}

