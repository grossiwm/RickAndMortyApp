import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
})
export class ModalPage implements OnInit {

  @Input() characterID: number;
  @Input() content: string;

  constructor() { }

  showCharacter = this.content === 'character';

  ngOnInit() {
  }
}
