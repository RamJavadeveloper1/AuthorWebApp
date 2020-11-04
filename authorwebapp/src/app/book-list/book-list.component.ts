import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Author } from '../author';
import { AuthorService } from '../author.service';
import { Book } from '../book';
@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  id: number;
  author: any = new Author();
  books: any
  confirmClicked = false;
  cancelClicked = false;

  constructor(private service: AuthorService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    let resp = this.service.getAuthorById(this.id);
    resp.subscribe(
      (data) => {
        this.author = data;
        this.books=this.author.books
      },
      (error) => console.log(error)
    );
  }

  /**
   *  getAuthorList
   */
  public getbooksList(): any {
    this.id = this.route.snapshot.params['id'];
    let resp = this.service.getAuthorById(this.id);
    resp.subscribe((data) => {
      this.author = data;
      this.books=this.author.books
    });
  }


  public deleteBookById(id: number) {
    let resp = this.service.deleteBookById(id);
    resp.subscribe((data) => {
      this.getbooksList();
    })
  }

  /**
     * updateAuthorById
     */
  public updateBookById(id: number) {
    this.router.navigate(['books/edit', id]);
  }



}
