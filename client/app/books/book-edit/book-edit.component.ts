import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';

import { Book } from '../../models/book.model';
import { BookService } from '../../services/book.service';

@Component({
  selector: 'app-book-edit',
  templateUrl: './book-edit.component.html',
  styleUrls: ['./book-edit.component.css']
})
export class BookEditComponent implements OnInit {

  @Input()
  book: Book;

  @Output()
  updateBook = new EventEmitter<Book>();

  constructor(private bookService: BookService, private route: ActivatedRoute) {}

  ngOnInit() {
    // this.route.paramMap
    // .subscribe( (params) => {
    //   const id = params.get('id');
    //   this.bookService.getBook(id).subscribe((book) => {
    //     console.log(book);
    //   });
    // });
    this.getBook();
  }

  getBook(): void {
    this.route.paramMap
      .subscribe((params) => {
        const id = params.get('id');
        this.bookService.getBook(id)
          .subscribe(book => this.book = book);
      });
  }

  onSubmit(event: Event, form: NgForm) {
    event.preventDefault();
    console.log('form submitted', this.book);
    console.log('form submitted', form.value);
    this.updateBook.emit(form.value);  // can either do form.value or this.book
    // this.book = new Book();
    form.reset();
  }

}
