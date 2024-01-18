import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MarvelService } from 'src/app/services/marvel.service';
import { TeamService } from 'src/app/services/team.service';

@Component({
  selector: 'app-team-selection',
  templateUrl: './team-selection.component.html',
  styleUrls: ['./team-selection.component.scss']
})
export class TeamSelectionComponent implements OnInit {
  characters: any[] = [];
  selectedTeam: any[] = [];

  constructor(
    private marvelService: MarvelService,
    private teamService: TeamService,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.marvelService.getCharacters().subscribe((data) => {
      this.characters = data.data.results;
    });
    this.selectedTeam = this.teamService.getSelectedTeam();
  }

  addToTeam(character: any): void {
    if (this.isValidAddition(character)) {
      this.selectedTeam.push(character);
      this.teamService.setSelectedTeam(this.selectedTeam);
      this.showNotification('Added ' + character.name + ' as ' + character.position + ' position');

    } else {
      this.showNotification('Invalid addition: Cannot add more players to a specific position.');
    }
  }

  removeFromTeam(index: number): void {
    this.selectedTeam.splice(index, 1);
    this.teamService.setSelectedTeam(this.selectedTeam);
  }

  private isValidAddition(newPlayer: any): boolean {
    const positionCounts = this.getPositionCounts();
    if (this.isPositionLimitReached(newPlayer.position, positionCounts)) {
      return false;
    }
    return true;
  }

  private getPositionCounts(): { [position: string]: number } {
    const positionCounts: { [position: string]: number } = {
      'GK': 0,
      'ST': 0,
      'MD': 0,
      'DF': 0,
    };

    this.selectedTeam.forEach(player => {
      positionCounts[player.position]++;
    });

    return positionCounts;
  }

  private isPositionLimitReached(newPosition: string, positionCounts: { [position: string]: number }): boolean {
    const positionLimits: { [position: string]: number } = {
      'GK': 1,
      'ST': 2,
      'MD': 2,
      'DF': 1,
    };

    return positionCounts[newPosition] >= positionLimits[newPosition];
  }

  private showNotification(message: string): void {
    this.snackBar.open(message, 'Close', {
      duration: 5000, // Duration in milliseconds
      panelClass: ['error-snackbar'] // Optional custom CSS class for styling
    });
  }
}
