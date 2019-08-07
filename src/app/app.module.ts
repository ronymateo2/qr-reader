import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppUiModule } from "./app-ui.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppUiModule, BrowserAnimationsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
