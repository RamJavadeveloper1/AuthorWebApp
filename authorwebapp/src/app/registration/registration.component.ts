import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Address } from '../address';
import { Author } from '../author';
import { AuthorService } from '../author.service';
import { Book } from '../book';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  author: Author = new Author();
  book: Book = new Book();
  address: Address = new Address();
  massage: any;

  constructor(private service :AuthorService, private router: Router) { }

  ngOnInit(): void {
  }

  public registrion(){
    //this.author.books.push(this.books);
  
    this.author.address=this.address;
    //this.author.books.push(this.book)
    //this.author.books.push(this.book);
    console.log(this.author)
    console.log(this.book)

    let resp = this.service.createAuthor(this.author);
    resp.subscribe((data)=>{
      this.massage=data;
      this.router.navigate(['/authors']);
    });
  }



}
