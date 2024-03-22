import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutes } from './app.routes.module';
import { AppComponent } from './app.component';

import { DummyDataModule } from './dummy/dummy-data/dummy-data.module';

import { TabCLIComponent } from './tab-cli/tab-cli.component';
import { TabBasicsComponent } from './tab-basics/tab-basics.component';
import { CardLabelComponent } from './card-label/card-label.component';

import { Logging } from './logger.service';

@NgModule({
  declarations: [
    AppComponent,
    TabCLIComponent,
    TabBasicsComponent,
    CardLabelComponent
  ],
  imports: [
    DummyDataModule,
    BrowserModule,
    AppRoutes
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private logger: Logging) {
    logger.log("starting AppModule")
  }
}
