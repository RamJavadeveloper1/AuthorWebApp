import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Author } from 'src/app/models/author';
import { Book } from 'src/app/models/book';
import { AuthorService } from 'src/app/services/author/author.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  id: number;
  author: any = new Author();
  books: any
  popoverTitle = 'Book Delete Confirmation';
  popoverMessage = 'Do you really want to delete ?';
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
