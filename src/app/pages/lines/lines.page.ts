import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { LinesFormComponent } from './form/form.component';

@Component({
  templateUrl: 'lines.page.html'
})
export class LinesPage implements OnInit {

  constructor(
    private readonly modal: ModalController
  ) { }

  ngOnInit() { }

  async onAdd() {
    const modal = await this.modal.create({
      component: LinesFormComponent
    });

    await modal.present();
  }
}
