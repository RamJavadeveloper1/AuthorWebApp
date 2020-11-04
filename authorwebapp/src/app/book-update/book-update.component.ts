import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Author } from '../author';
import { AuthorService } from '../author.service';
import { Book } from '../book';

@Component({
  selector: 'app-book-update',
  templateUrl: './book-update.component.html',
  styleUrls: ['./book-update.component.css']
})
export class BookUpdateComponent implements OnInit {
  id: number;
  author: any = new Author();
  book: any = new Book();

  constructor(private service: AuthorService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    let resp = this.service.getBookById(this.id);
    resp.subscribe(
      (data) => {
        this.book = data;
      },
      (error) => console.log(error)
    );
  }

  public update(): any {
    let resp = this.service.updateBookById(this.id, this.book);
    resp.subscribe((data) => {
      console.log(data);
    });
  }

  gotoList() {
    this.router.navigate(['/authors/bookList']);
  }

}
