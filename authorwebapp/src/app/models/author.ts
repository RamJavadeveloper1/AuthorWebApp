import { from } from 'rxjs';
import { Address } from './address';
import { Book } from './book';

export class Author {
    firstName: string;
    lastName: string;
    address: Address;
    books: Book[]=[];
   
}