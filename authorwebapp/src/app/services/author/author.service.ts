import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { Author } from 'src/app/models/author';
import { Book } from 'src/app/models/book';



@Injectable({
  providedIn: 'root'
})
export class AuthorService {

  constructor(private http: HttpClient, private router: Router) { }

  createAuthor(author: Author) {
    return this.http.post(environment.authorApiUrl, author,
      { responseType: 'text' as 'json' }
    );
  }

  getAllAuthor() {
    return this.http.get(environment.authorApiUrl);
  }

  getAuthorById(authorId) {
    return this.http.get(environment.authorApiUrl + '/' + authorId);
  }

  getBookById(authorId) {
    return this.http.get(environment.bookApiUrl + '/' + authorId);
  }
  
  deleteById(authorId) {
    return this.http.delete(environment.authorApiUrl + '/' + authorId);
  }

  deleteBookById(bookId) {
    return this.http.delete(environment.bookApiUrl + '/' + bookId);
  }

  updateAuthorById(id, author: Author) {
    return this.http.put(
      environment.authorApiUrl + '/update/' + id,
      author,
      { responseType: 'text' as 'json' }
    );

  }

  updateBookById(id, book: Book) {
    return this.http.put(
      environment.bookApiUrl + '/update/' + id,
      book,
      { responseType: 'text' as 'json' }
    );

  }

}
