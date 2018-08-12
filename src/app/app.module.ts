import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CustomAttribureDirective } from './app.attributedirective';
import { CustomStructuralDirective } from './app.customstructuraldir';

@NgModule({
  declarations: [
    AppComponent,CustomAttribureDirective,CustomStructuralDirective

  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
