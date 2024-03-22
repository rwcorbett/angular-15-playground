import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";

import { AppRoutes } from './app.routes.module';
import { AppComponent } from './app.component';

import { DummyDataModule } from './dummy/dummy-data/dummy-data.module';

import { TabCLIComponent } from './tab-cli/tab-cli.component';
import { TabBasicsComponent } from './tab-basics/tab-basics.component';
import { CardLabelComponent } from './card-label/card-label.component';

import { Logging } from './logger.service';

import { ErrorPageComponent } from './error-page/error-page.component';
import { TabHomeComponent } from './tab-home/tab-home.component';

@NgModule({
  declarations: [
    AppComponent,
    TabCLIComponent,
    TabBasicsComponent,
    CardLabelComponent,
    ErrorPageComponent,
    TabHomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutes,
    HttpClientModule,
    DummyDataModule, // must be imported since the component is used in `app.component.html`
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private logger: Logging) {
    logger.log("starting AppModule")
  }
}
