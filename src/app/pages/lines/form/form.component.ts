import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'lines-form',
  templateUrl: 'form.component.html'
})
export class LinesFormComponent implements OnInit {

  constructor(
    public readonly modal: ModalController
  ) { }

  ngOnInit() {}
}
