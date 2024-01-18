import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharacterListComponent } from './components/character-list/character-list.component';
import { ChosenTeamComponent } from './components/chosen-team/chosen-team.component';
import { TeamSelectionComponent } from './components/team-selection/team-selection.component';

const routes: Routes = [
  { path: 'character-list', component: CharacterListComponent },
  { path: 'team-selection', component: TeamSelectionComponent },
  { path: 'chosen-team', component: ChosenTeamComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
