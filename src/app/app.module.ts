import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { UserRegisterationComponent } from './user-registeration/user-registeration.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { BookViewComponent } from './book-view/book-view.component';
import { BookAddComponent } from './book-add/book-add.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminLoginComponent,
    UserRegisterationComponent,
    UserLoginComponent,
    BookViewComponent,
    BookAddComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
