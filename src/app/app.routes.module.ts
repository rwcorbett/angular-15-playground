import { NgModule } from '@angular/core';
import { Route, RouterModule, Routes } from '@angular/router';

import { TabCLIComponent } from './tab-cli/tab-cli.component';
import { TabBasicsComponent } from './tab-basics/tab-basics.component';
import { Logging } from './logger.service';

const routes: Routes = [
  { path: 'CLI', component: TabCLIComponent },
  { path: 'Basic', component: TabBasicsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutes {
  constructor(private logger: Logging) {
    logger.log(`init router; routes: ${routes.map((r: Route) => { return r.path; })}`);
  }
}
