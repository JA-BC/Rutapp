import { Directive, EventEmitter, HostListener, Input, Output } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Directive({
  // eslint-disable-next-line @angular-eslint/directive-selector
  selector: '[confirm]'
})
export class ConfirmationDirective {

  @Input() header = 'Confirmar';
  @Input() message = '¿Esta seguro que desea realizar esta acción?';

  @Output('confirm')
  confirmation = new EventEmitter();

  constructor(
    private readonly alert: AlertController
  ) { }

  @HostListener('click')
  async onClick() {
    const alert = await this.alert.create({
      header: this.header,
      message: this.message,
      buttons: [
        {
          text: 'No',
          role: 'cancel'
        },
        {
          text: 'Sí',
          id: 'confirm-button',
          handler: () => this.confirmation.emit()
        }
      ]
    });

    await alert.present();
  }
}
