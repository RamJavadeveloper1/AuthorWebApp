import { from } from 'rxjs';
import {Book} from './book'
import {Address} from './address'

export class Author {
    firstName: string;
    lastName: string;
    address: Address;
    books: Book [];
   
}