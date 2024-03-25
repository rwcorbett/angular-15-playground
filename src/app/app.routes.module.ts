import { NgModule } from '@angular/core';
import { Route, RouterModule, Routes } from '@angular/router';

import { Logging } from './logger.service';
import { ErrorPageComponent } from './error-page/error-page.component';
import { TabCLIComponent } from './tab-cli/tab-cli.component';
import { TabBasicsComponent } from './tab-basics/tab-basics.component';
import { TabHomeComponent } from './tab-home/tab-home.component';

const routes: Routes = [
  { path: 'CLI', component: TabCLIComponent },
  { path: 'Basic', component: TabBasicsComponent },
  { path: '', component: TabHomeComponent },
  // { path: '', redirectTo: '/', pathMatch: 'full' }, // this is now redundant since there is a home tab
  { path: '**', component: ErrorPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,
    // { enableTracing: true }
  )],
  exports: [RouterModule]
})
export class AppRoutes {
  constructor(private logger: Logging) {
    logger.log(`init router; routes: ${routes.map((r: Route) => { return r.path; })}`);
  }
}
