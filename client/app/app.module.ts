import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { SearchPipe } from './search.pipe';

import { AppRoutingModule } from './routes/app-routing.module';
import { AppComponent } from './app.component';

import * as fromBooks from './books';
import * as fromServices from './services';
import { NavComponent } from './nav/nav.component';

@NgModule({
  declarations: [
    AppComponent,
    ...fromBooks.components,
    SearchPipe,
    NavComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [...fromServices.services],
  bootstrap: [AppComponent]
})
export class AppModule { }
