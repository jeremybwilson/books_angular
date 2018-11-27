import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { of, Observable, BehaviorSubject } from 'rxjs';

import { Book } from '../models/book.model';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  books$ = new BehaviorSubject<Book[]>([]);

  constructor(private http: HttpClient) { }

  // getBooks(): Book[] {
  getBooks(): Observable<Book[]> {
    this.http.get<Book[]>('/api/books')
      .subscribe(data => this.books$.next(data));
      console.log('got these books!', this.books$);
      return this.books$;
  }

  getBook(_id: string): Observable<Book>{
    console.log('book service got a request to edit a book', _id);
    return this.http.get<Book>(`/api/books/${_id}`);
  }

  createBook(book: Book): Observable<Book> {
    console.log('book service got a request to create book', book);
    return this.http.post<Book>('/api/books', book);
  }

  deleteBook(_id: number): Observable<Book> {
    console.log('book service got the request to delete book', _id);
    return this.http.delete<Book>(`/api/books/${_id}`);
  }

  updateBook(book: Book): Observable<Book> {
    console.log('book service got the request to update book', book);
    return this.http.put<Book>(`/api/books/${book._id}`, book);
  }
}
