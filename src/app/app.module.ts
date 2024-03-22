import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { Routes, RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { DummyDataModule } from './dummy/dummy-data/dummy-data.module';

import { TabCLIComponent } from './tab-cli/tab-cli.component';
import { TabBasicsComponent } from './tab-basics/tab-basics.component';
import { CardLabelComponent } from './card-label/card-label.component';

import { Logging } from './logger.service';

const appRoutes: Routes = [
  { path: 'CLI', component: TabCLIComponent },
  { path: 'Basic', component: TabBasicsComponent },
];

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
    AppRoutingModule,
    RouterModule.forRoot(
      appRoutes, { enableTracing: true }  // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private logger: Logging) {
    logger.log("starting AppModule")
  }
}
