import { from } from 'rxjs';
import {Book} from './book'
import {Address} from './address'

export class Author {
    author_id: number;
    firstName: string;
    lastName: string;
    books: Book [];
    address: Address;
}