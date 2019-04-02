import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.scss'],
})
export class SearchbarComponent implements OnInit {

  @Output() outputToParent = new EventEmitter<Object>();

  url = '';


  async handleInput(event) {
    this.url = `https://rickandmortyapi.com/api/character/?name=${event.target.value}`;
    const response = await fetch(this.url);
    const json = await response.json();
    this.outputToParent.emit(json);
  }

  constructor() { }

  ngOnInit() {}

}
