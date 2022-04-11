import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { RouteFilterComponent } from './filter/filter.component';

@Component({
  templateUrl: './suggest.page.html'
})
export class SuggestPage implements OnInit {

  constructor(
    private readonly modal: ModalController
  ) { }

  ngOnInit() { }

  async onFilter() {
    const modal = await this.modal.create({
      component: RouteFilterComponent,
      initialBreakpoint: 0.5,
      breakpoints: [0, 0.5, 1]
    });

    return await modal.present();
  }
}
