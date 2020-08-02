import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ViewComponent } from './components/view/view.component';
import { TodoComponent } from './components/todo/todo.component'


@NgModule({
  declarations: [
    AppComponent,
    ViewComponent,
    TodoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
