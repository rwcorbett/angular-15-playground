import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TabCLIComponent } from './tab-cli/tab-cli.component';
import { TabBasicsComponent } from './tab-basics/tab-basics.component';
import { CardLabelComponent } from './card-label/card-label.component';
import { Logging } from './logger.service';
import { DummyDataModule } from './dummy/dummy-data/dummy-data.module';

@NgModule({
  declarations: [
    AppComponent,
    TabCLIComponent,
    TabBasicsComponent,
    CardLabelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DummyDataModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private logger: Logging) {
    logger.log("starting AppModule")
  }
}
