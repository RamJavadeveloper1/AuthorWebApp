import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators, FormControl, FormArray, NgForm } from '@angular/forms'
import { Book } from 'src/app/models/book';
import { Address } from 'src/app/models/address';
import { Author } from 'src/app/models/author';
import { AuthorService } from 'src/app/services/author/author.service';

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
  books: Book[] =[];

  addForm: FormGroup;
  rows: FormArray;
  itemForm: FormGroup;

  constructor(private service: AuthorService, private fb: FormBuilder, private router: Router) {

    this.addForm = this.fb.group({
      items: [null, Validators.required],
      items_value: ['no', Validators.required]
    });
    this.rows = this.fb.array([]);
  }

  ngOnInit() {
    this.addForm.get("items_value").setValue("yes");
    this.addForm.addControl('rows', this.rows);
  }

  onAddRow1() {
    this.author.books.push(this.createItemFormGroup1());
  }

  createItemFormGroup1(): Book {
    return this.fb.group({
      title: null,
    }).value;
  }

  onAddRow() {
    this.rows.push(this.createItemFormGroup());
  }

  onRemoveRow(rowIndex: number) {
    this.rows.removeAt(rowIndex);
  }

  createItemFormGroup(): FormGroup {
    return this.fb.group({
      title: null,
    });
  }

  public registrion() {
    this.author.address = this.address;
    this.books= this.rows.getRawValue()
    this.author.books=this.books;
    let resp = this.service.createAuthor(this.author);
    resp.subscribe((data) => {
      this.massage = data;
      this.router.navigate(['/authors']);
    });
  }



}
