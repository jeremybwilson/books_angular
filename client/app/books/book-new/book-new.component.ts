import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BookService } from '../../services/book.service';
import { Router } from '@angular/router';

import { Book } from '../../models/book.model';

@Component({
  selector: 'app-book-new',
  templateUrl: './book-new.component.html',
  styleUrls: ['./book-new.component.css', '../books.css']
})
export class BookNewComponent implements OnInit {

  book = new Book();

  @Output()
  createBook = new EventEmitter<Book>();

  // constructor(private _httpService: HttpService) {}
  constructor(
    private bookService: BookService,
    private readonly router: Router
  ) {}

  ngOnInit() {}

  onSubmit(event: Event, form: NgForm) {
    event.preventDefault();
    console.log('form submitted', this.book);
    console.log('form submitted', form.value);
    this.bookService.createBook(this.book)
      .subscribe(newBook => {
        this.createBook.emit(this.book);  // can either do form.value or this.book
        this.book = new Book();
        form.reset();
        console.log('new book created', newBook);
        this.router.navigateByUrl('/');
      });
  }

}
