import { ModalPage } from './../modal/modal.page';
import { ModalController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-characters',
  templateUrl: './characters.page.html',
  styleUrls: ['./characters.page.scss'],
})
export class CharactersPage implements OnInit {

  constructor(public modal: ModalController) { }

  characters = [];
  characterID = 0;
  isLoaded = false;

  async presentModal() {
    const modal = await this.modal.create({
      component: ModalPage,
      componentProps: { characterID: this.characterID }
    });
    return await modal.present();
  }

  async getChatacters() {
    const response = await fetch('https://rickandmortyapi.com/api/character/');
    const json = await response.json();
    this.characters = json.results;
    this.isLoaded = true;
  }

  getCharacter(event) {
    const label = event.target;
    const inputValue = label.parentNode.querySelector('input[type="hidden"]').value;
    this.characterID = inputValue;
    this.presentModal();

  }

  ngOnInit() {
    this.getChatacters();
  }

}
