import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';
import {UserComponent} from './user/user.component';
import {FormsModule} from "@angular/forms";
import {BrowserDynamicTestingModule} from "@angular/platform-browser-dynamic/testing";


@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
  ],
  imports: [BrowserModule,
    FormsModule,
    BrowserModule,
    BrowserDynamicTestingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
