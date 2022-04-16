import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'stops-form',
  templateUrl: 'form.component.html'
})
export class StopsFormComponent implements OnInit {

  constructor(
    public readonly modal: ModalController
  ) { }

  ngOnInit() {}
}
