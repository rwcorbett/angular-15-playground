import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DummyDataAPIComponent } from '../dummy-data-api/dummy-data-api.component';

@NgModule({
  declarations: [
    DummyDataAPIComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [DummyDataAPIComponent]
})
export class DummyDataModule {
  constructor() {
    console.debug("-------load DummyDataModule");
  }
}
