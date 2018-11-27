import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// import { BookNewComponent } from '../books/book-new/book-new.component';
// import { BookListComponent } from '../books/book-list/book-list.component';
// import { BookDetailComponent } from '../books/book-detail/book-detail.component';
// import { BookEditComponent } from '../books/book-edit/book-edit.component';

import * as fromBooks from '../books';

const routes: Routes = [
  { path: '', redirectTo: '/books', pathMatch: 'full' },
  { path: 'books', component: fromBooks.BookListComponent },
  { path: 'books/new', component: fromBooks.BookNewComponent },
  { path: ':id', component: fromBooks.BookDetailComponent },
  { path: 'books/:id/edit', component: fromBooks.BookEditComponent }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})

export class AppRoutingModule { }
