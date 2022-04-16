import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'institutions-form',
  templateUrl: 'form.component.html'
})
export class InstitutionsFormComponent implements OnInit {

  constructor(
    public readonly modal: ModalController
  ) { }

  ngOnInit() {}
}
