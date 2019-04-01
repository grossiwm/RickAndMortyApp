import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
})
export class ModalPage implements OnInit {

  @Input() characterID: number;

  constructor() { }

  character = {};
  isLoaded = false;

  async request() {
    const url = `https://rickandmortyapi.com/api/character/${this.characterID}`;
    const response = await fetch(url);
    const json = await response.json();
    this.character = json;
    this.isLoaded = true;
  }

  ngOnInit() {
    console.log(this.characterID);
    this.request();
    console.log(this.character);
  }
}
