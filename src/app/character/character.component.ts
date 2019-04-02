import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.scss'],
})
export class CharacterComponent implements OnInit {

  @Input() characterID: number;

  character = {};
  isLoaded = false;


  async request() {
    const url = `https://rickandmortyapi.com/api/character/${this.characterID}`;
    const response = await fetch(url);
    const json = await response.json();
    console.log(json);
    console.log(url);
    this.character = json;
    this.isLoaded = true;
  }

  constructor() { }

  ngOnInit() {
    this.request();
  }

}
