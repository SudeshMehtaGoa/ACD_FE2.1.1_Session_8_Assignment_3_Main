import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { DropDownService } from 'app/service/drop-down.service';

/* Second Service is introduced in @NgModule */
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [DropDownService],
  bootstrap: [AppComponent]
})
export class AppModule { }
