import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RecRoomComponent } from './rec-room/rec-room.component';
import { ExampletableComponent } from './exampletable/exampletable.component';

import { EztraderComponent } from './eztrader/eztrader.component'; 


const routes: Routes = [
{path: "dashboard", component: DashboardComponent},
{path: "delortool", component: RecRoomComponent},
{path: "eztrader", component: EztraderComponent},
{path: "", component: DashboardComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
