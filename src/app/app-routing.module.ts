import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TeamComponent } from './components/team/team.component';
import { GoalkeepersDetailsComponent } from './components/details/goalkeepers-details/goalkeepers-details.component';
import { FieldPlayersDetailsComponent } from './components/details/field-players-details/field-players-details.component';

const routes: Routes = [
  { path: "", component: TeamComponent },
  { path: "goalkeeper/:name/:id", component: GoalkeepersDetailsComponent },
  { path: "fieldPlayer/:name/:id", component: FieldPlayersDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    onSameUrlNavigation: 'ignore', // Ignora routing en la misma página.
    anchorScrolling: 'enabled', // Permite anclas.
    scrollPositionRestoration: 'enabled' // Restablece el scroll a 0.
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
