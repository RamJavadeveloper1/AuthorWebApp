import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Author } from 'src/app/models/author';
import { AuthorService } from 'src/app/services/author/author.service';

@Component({
  selector: 'app-author-update',
  templateUrl: './author-update.component.html',
  styleUrls: ['./author-update.component.css']
})
export class AuthorUpdateComponent implements OnInit {

  id: number;
  author: any = new Author();
  confirmClicked = false;
  cancelClicked = false;

  constructor(private service: AuthorService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    let resp = this.service.getAuthorById(this.id);
    resp.subscribe(
      (data) => {
        this.author = data;
      },
      (error) => console.log(error)
    );
  }

  public update(): any {
    let resp = this.service.updateAuthorById(this.id, this.author);
    this.confirmClicked=true
    resp.subscribe((data) => {
      console.log(data);
    });
    
  }

  gotoList() {
    this.router.navigate(['/authors']);
  }


}
