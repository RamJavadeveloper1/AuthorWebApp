import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { Author } from './author';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthorService {

  constructor(private http: HttpClient, private router: Router) { }

  createAuthor(author: Author) {
    return this.http.post(environment.apiUrl, author,
      { responseType: 'text' as 'json' }
    );
  }

  getAllAuthor() {
    return this.http.get(environment.apiUrl);
  }

  getAuthorById(authorId) {
    return this.http.get(environment.apiUrl + '/' + authorId);
  }

  deleteById(authorId) {
    return this.http.delete(environment.apiUrl + '/' + authorId);
  }

  updateAuthorById(id, author: Author) {
    return this.http.put(
      environment.apiUrl + '/update/' + id,
      author,
      { responseType: 'text' as 'json' }
    );

  }

}
