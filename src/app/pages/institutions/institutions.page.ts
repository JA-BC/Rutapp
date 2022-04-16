import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { InstitutionsFormComponent } from './form/form.component';

@Component({
  templateUrl: 'institutions.page.html'
})
export class InstitutionsPage implements OnInit {

  constructor(
    private readonly modal: ModalController
  ) { }

  ngOnInit() { }

  async onAdd() {
    const modal = await this.modal.create({
      component: InstitutionsFormComponent
    });

    await modal.present();
  }
}
