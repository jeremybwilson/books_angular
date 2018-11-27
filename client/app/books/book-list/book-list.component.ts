import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Book } from '../../models/book.model';
// import { HttpService } from '../../http.service';
import { BookService } from '../../services';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css', '../books.css']
})
export class BookListComponent implements OnInit {

  books: Book[] = [];
  selectedBook: Book;
  filter: Book = new Book();

  constructor(private bookService: BookService) {}

  ngOnInit() {
    this.getBooks();
    console.log(this.bookService);
    // this.books = this.bookService.getBooks();
  }

  onSelect(book: Book): void {
    console.log('selected', book);
    this.selectedBook = this.selectedBook === book ? null : book;
    // above ternary operator replaces the below if/else statement
    // if (this.selectedBook === book) {
    //   this.selectedBook = null;
    // } else {
    //   this.selectedBook = book;
    // }
  }

  clearFilter(): void {
    this.filter = new Book();
  }

  onCreate(book: Book): void {
    this.bookService.createBook(book)
    .subscribe(data => {
      console.log(data);
      this.books = [...this.books, data];
        // this.books.push(data);
    });
  }

  onDelete(_id: number): void {
    console.log(`deleting the id: ${_id}`);
    this.bookService.deleteBook(_id)
    .subscribe(data => {
      console.log('removed book', data);
      this.books = this.books.filter(book => book._id !== data._id);
      // this.books.push(data);
    });
  }

  onEvent(event: Event): void {
    console.log('eventing');
    event.stopPropagation();
  }

  getBooks(): void {
    this.bookService.getBooks()
    .subscribe(books => {
      this.books = books;
      console.log('these books are back from subscription', books);
    });
  }

  getBook(book: Book): void {
    this.selectedBook = this.selectedBook === book ? null : book;
    // if (this.selectedBook === book) {
    //   this.selectedBook = null;
    // } else {
    //   this.selectedBook = book;
    // }
  }

  deleteBook(_id: number): void {
    this.selectedBook = null;
    this.bookService.deleteBook(_id)
    .subscribe(data => {
    for (let index = 0; index < this.books.length; index++) {
      if (this.books[index]._id === data._id) {
      this.books.splice(index, 1);
      }
    }
    });
  }

  updateBook(book: Book): void {
    console.log('component got a request to update book', book);
    this.bookService.updateBook(book)
    .subscribe(data => console.log('updated book data', data));
  }
}

