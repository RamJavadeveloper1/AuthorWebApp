import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { ConfirmationPopoverModule } from 'angular-confirmation-popover';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './componates/login/login.component';
import { AuthorListComponent } from './componates/author-list/author-list.component';
import { RegistrationComponent } from './componates/registration/registration.component';
import { AuthorUpdateComponent } from './componates/author-update/author-update.component';
import { BookListComponent } from './componates/book-list/book-list.component';
import { BookUpdateComponent } from './componates/book-update/book-update.component';
import { AuthorService } from './services/author/author.service';


LoginComponent

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
    ReactiveFormsModule,
    NgbModule,
    ConfirmationPopoverModule.forRoot({
      confirmButtonType: 'danger', // set defaults here
    }),
  ],
  providers: [AuthorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
