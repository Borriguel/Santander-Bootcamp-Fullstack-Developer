import { Component, OnInit } from '@angular/core';
import { Book } from './model/Book';
import { BookService } from './Product-list.component.service';

@Component({
	selector: 'app-product-list',
	templateUrl: './product-list.component.html',
	styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
    bookList: Book[] = [];
	constructor(private bookService: BookService) {}

	ngOnInit(): void {
        this.bookList = this.bookService.getBooks();
        console.log(this.bookList);
    }
}
