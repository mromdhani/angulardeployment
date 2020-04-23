import { Injectable } from '@angular/core';
import { IPost } from '../domain/ipost';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { retryWhen, delay, take,concatMap } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class PostService {
 //  url: string = 'https://localhost:5656';
  url: string = 'https://jsonplaceholder.typicode.com/posts';


  constructor(private http : HttpClient) { }  //  DI

  getAllPosts():  Observable< IPost[]> {

    let headers = new HttpHeaders()
                       .set('Content-type', 'text/json')
                       .set('Authorization', 'Bearer ======= AGAIN FAKE JWT TOKEN ====== ');


    return  this.http.get<IPost[]>(this.url, {headers})
                     .pipe(
                       retryWhen(errors => errors.pipe(delay(1000), take(3)))
                  )
  }

}
