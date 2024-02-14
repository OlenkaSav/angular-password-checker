import { NgModule }      from "@angular/core";
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { AppComponent } from './app.component';
import {PasswordCheckerComponent} from './components/password-checker/password-checker.component'
 
@NgModule({
  declarations: [
    AppComponent,
    PasswordCheckerComponent 
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }