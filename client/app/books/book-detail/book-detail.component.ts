import { Component, OnInit, Input } from '@angular/core';
// import { NgForm } from '@angular/forms';

import { Book } from '../../models/book.model';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css', '../books.css']
})
export class BookDetailComponent implements OnInit {

  @Input()
  book: Book;

  constructor( ) {}

  ngOnInit() {
  }

}
