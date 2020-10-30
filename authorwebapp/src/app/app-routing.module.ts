import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthorListComponent } from './author-list/author-list.component';
import { AuthorUpdateComponent } from './author-update/author-update.component';
import { AuthorService } from './author.service';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';

const routes: Routes = [
{path:'', redirectTo:'login', pathMatch:"full"},
{path:'login', component: LoginComponent },
{path:'author/create', component: RegistrationComponent},
{path: 'author/edit/:id', component: AuthorUpdateComponent},
{path: 'authors', component: AuthorListComponent},
{path: 'reload', redirectTo : 'authors', pathMatch :'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
