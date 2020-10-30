import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Author } from '../author';
import { AuthorService } from '../author.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  author: Author = new Author();
  massage: any;

  constructor(private service :AuthorService, private router: Router) { }

  ngOnInit(): void {
  }

  public registraion(){
    let resp = this.service.createAuthor(this.author);
    resp.subscribe((data)=>{
      this.massage=data;
      this.router.navigate(['/authors']);
    });
  }



}
