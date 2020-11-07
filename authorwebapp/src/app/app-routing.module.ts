import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthorListComponent } from './componates/author-list/author-list.component';
import { AuthorUpdateComponent } from './componates/author-update/author-update.component';
import { BookListComponent } from './componates/book-list/book-list.component';
import { BookUpdateComponent } from './componates/book-update/book-update.component';
import { LoginComponent } from './componates/login/login.component';
import { RegistrationComponent } from './componates/registration/registration.component';

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
