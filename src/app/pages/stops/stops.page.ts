import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { StopsFormComponent } from './form/form.component';

@Component({
  templateUrl: 'stops.page.html'
})
export class StopsPage implements OnInit {

  constructor(
    private readonly modal: ModalController
  ) { }

  ngOnInit() { }

  async onAdd() {
    const modal = await this.modal.create({
      component: StopsFormComponent
    });

    await modal.present();
  }
}
