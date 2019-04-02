import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {
  constructor() { }

  imgUrl = '';

  // changeImages(array) {
  //   this.imgUrl = array[0]
  //   for (let i = 1; i < array.length; i++) {
  //     setTimeout(
  //       () => {
  //         this.imgUrl = array[i];
  //       }, 3000);
  //   }
  // }

  async getImageUrls() {
    const response = await fetch('../../assets/image_urls.json');
    const json = await response.json();
    // this.changeImages(json.home_page);
    this.imgUrl = json.home_page[0];
  }

  // tslint:disable-next-line:use-life-cycle-interface
  ngOnInit() {
    this.getImageUrls();
  }


}
