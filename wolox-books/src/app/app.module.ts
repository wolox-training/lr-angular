import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from '../app/screens/register/register.component';
import { LoginComponent } from './screens/login/login.component';
import { ListBooksComponent } from './screens/list-books/list-books.component';
import { AuthComponent } from './components/auth/auth.component';
import { UnauthComponent } from './screens/unauth/unauth.component';
import { SearchBooksPipe } from './pipes/search-books.pipe';
import { BookDetailComponent } from './screens/list-books/screens/book-detail/book-detail.component';
import { CardsComponent } from './screens/list-books/components/cards/cards.component';
import { InputSearchComponent } from './screens/list-books/components/input-search/input-search.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    ListBooksComponent,
    AuthComponent,
    UnauthComponent,
    SearchBooksPipe,
    BookDetailComponent,
    CardsComponent,
    InputSearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
