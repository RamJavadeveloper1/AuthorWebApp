import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Author } from '../author';
import { AuthorService } from '../author.service';
@Component({
  selector: 'app-author-list',
  templateUrl: './author-list.component.html',
  styleUrls: ['./author-list.component.css']
})
export class AuthorListComponent implements OnInit {

  authors: any;
  books: any
  id: number;
  name: string;
  massage: string;
  popoverTitle = 'Record Delete Confirmation';
  popoverMessage = 'Do you really want to delete ?';
  confirmClicked = false;
  cancelClicked = false;

  constructor(private service: AuthorService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    let resp = this.service.getAllAuthor();
    resp.subscribe((data) => {
      console.log(data);
      this.authors = data;
    })
  }

  /**
  * getAuthorList
  */
  public getAuthorList(): any {
    let resp = this.service.getAllAuthor();
    resp.subscribe((data) => { 
      console.log(data);
      (this.authors = data) 
    });
  }

  /**
   * findAuthorByName
   */
  public findAuthorByName() {

  }

  /**
   * findAuthorById
   */
  public findAuthorById() {
    let resp = this.service.getAuthorById(this.id);
    resp.subscribe((data) => {
      this.authors = [data]
    })

  }

  /**
   * deleteAuthorById
   */
  public deleteAuthorById(id: number) {
    let resp = this.service.deleteById(id);
    resp.subscribe((data) => {
      this.getAuthorList();
    })
  }

  /**
   * updateAuthorById
   */
  public updateAuthorById(id: number) {
    this.router.navigate(['authors/edit', id]);
  }


  /**
   * bookList
   */
  public bookList(id: number) {
    this.router.navigate(['authors/bookList', id]);
  }



}
