// src/app/team.service.ts

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TeamService {
  private selectedTeam: any[] = [];

  getSelectedTeam(): any[] {
    return this.selectedTeam;
  }

  setSelectedTeam(team: any[]): void {
    this.selectedTeam = team;
  }
}
