import { Component, OnInit } from '@angular/core';
import { MarvelService } from 'src/app/services/marvel.service';

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.scss']
})
export class CharacterListComponent implements OnInit{
  characters: any[] | undefined;

  constructor(private marvelService: MarvelService) {}

  ngOnInit(): void {
    this.marvelService.getCharacters().subscribe((data) => {
      this.characters = data.data.results;
    });
  }
  shouldShowReadMoreButton(character: any): boolean {
    const maxDescriptionLength = 150; // Adjust as needed
    return character.description && character.description.length > maxDescriptionLength;
  }

  toggleDescription(character: any): void {
    character.showFullDescription = !character.showFullDescription;
  }

}
