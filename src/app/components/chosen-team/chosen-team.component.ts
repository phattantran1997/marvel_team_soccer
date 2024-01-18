import { Component, Input } from '@angular/core';
import { TeamService } from 'src/app/services/team.service';

@Component({
  selector: 'app-chosen-team',
  templateUrl: './chosen-team.component.html',
  styleUrls: ['./chosen-team.component.scss']
})
export class ChosenTeamComponent {
  selectedTeam: any[] = [];

  constructor(private teamService: TeamService) {}

  ngOnInit(): void {
    this.selectedTeam = this.teamService.getSelectedTeam();
  }

}
