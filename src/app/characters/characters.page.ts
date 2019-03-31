import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.page.html',
  styleUrls: ['./characters.page.scss'],
})
export class CharactersPage implements OnInit {

  characters = [];
  characterID = 0;

  async getChatacters() {
    const response = await fetch('https://rickandmortyapi.com/api/character/');
    const json = await response.json();
    this.characters = json.results;
    console.log(this.characters);
  }

  getCharacter(event) {
    const label = event.target;
    const inputValue = label.parentNode.querySelector('input[type="hidden"]').value;
    console.log(inputValue);

  }

  constructor() { }

  ngOnInit() {
    this.getChatacters();
  }

}
