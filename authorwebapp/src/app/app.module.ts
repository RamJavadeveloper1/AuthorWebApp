import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AuthorListComponent } from './author-list/author-list.component';
import { RegistrationComponent } from './registration/registration.component';
import { AuthorUpdateComponent } from './author-update/author-update.component';
import { AuthorService } from './author.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BookListComponent } from './book-list/book-list.component';
import { BookUpdateComponent } from './book-update/book-update.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AuthorListComponent,
    RegistrationComponent,
    AuthorUpdateComponent,
    BookListComponent,
    BookUpdateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbModule
  ],
  providers: [AuthorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
