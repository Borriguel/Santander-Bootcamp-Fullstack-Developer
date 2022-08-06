import { Injectable } from '@angular/core';
import { Book } from './model/Book';

@Injectable()
export class BookService {
    BookList: Book[] = [];
	constructor() {}
    getBooks(): Book[] {
        return this.BookList = BOOKS;
    }
}
const BOOKS: Book[] = [
    {
        id: 1,
        name: 'Harry Potter e A Pedra Filosofal',
        price: 40,
        quantity: 7,
        img: 'https://lojasaraiva.vteximg.com.br/arquivos/ids/12110250/1007739147.jpg?v=637142252496370000',
        category: 'fantasia',
    },
    {
        id: 2,
        name: 'Game of Thrones',
        price: 66.90,
        quantity: 2,
        img: 'https://m.media-amazon.com/images/P/B07PPB9QW1.01._SCLZZZZZZZ_SX500_.jpg',
        category: 'fantasia',
    },
    {
        id: 3,
        name: 'O Código Da Vinci',
        price: 30,
        quantity: 1,
        img: 'https://images-na.ssl-images-amazon.com/images/I/91QSDmqQdaL.jpg',
        category: 'mistério'
    },
    {
        id: 4,
        name: 'O Alquimista',
        price: 27.90,
        quantity: 9,
        img: 'https://lirp.cdn-website.com/174487e2/dms3rep/multi/opt/o-alquimista-22b5e5e0-1920w.jpeg',
        category: 'romance'
    },
    {
        id: 5,
        name: 'Dom Casmurro',
        price: 9.90,
        quantity: 12,
        img: 'https://sppa.org.br/uploads/literature/10.jpg',
        category: 'romance'
    }
]
