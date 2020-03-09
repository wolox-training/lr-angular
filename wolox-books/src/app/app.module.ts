import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatSliderModule } from '@angular/material/slider';
import { MatDialogModule } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import { registerLocaleData } from '@angular/common';
import localeEs from '@angular/common/locales/es';
registerLocaleData(localeEs, 'es-ES');
import { StoreModule } from '@ngrx/store';
import { reducer } from './store/books.reducer';

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
import { CartComponent } from './screens/cart/cart.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { ModalCarComponent } from './screens/modal-car/modal-car.component';

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
    InputSearchComponent,
    CartComponent,
    ModalCarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NoopAnimationsModule,
    MatSliderModule,
    MatDialogModule,
    CommonModule,
    StoreModule.forRoot({
      listBooksCar: reducer
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
