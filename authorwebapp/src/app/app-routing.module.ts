import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthorListComponent } from './author-list/author-list.component';
import { AuthorUpdateComponent } from './author-update/author-update.component';
import { AuthorService } from './author.service';
import { BookListComponent } from './book-list/book-list.component';
import { BookUpdateComponent } from './book-update/book-update.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';

const routes: Routes = [
{path:'', redirectTo:'login', pathMatch:"full"},
{path:'login', component: LoginComponent },
{path:'author/create', component: RegistrationComponent},
{path: 'authors/edit/:id', component: AuthorUpdateComponent},
{path: 'books/edit/:id', component: BookUpdateComponent},
{path: 'authors/bookList/:id', component: BookListComponent},
{path: 'authors', component: AuthorListComponent},
{path: 'reload', redirectTo : 'authors', pathMatch :'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
