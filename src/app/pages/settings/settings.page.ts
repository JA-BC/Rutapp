import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';

@Component({
  templateUrl: 'settings.page.html'
})
export class SettingsPage implements OnInit {

  constructor(
    @Inject(DOCUMENT) private readonly document: Document
  ) { }

  ngOnInit() { }

  onThemeChange() {
    this.document.documentElement.classList.toggle('theme-dark');
  }
}
