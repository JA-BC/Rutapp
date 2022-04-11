import { Component, OnInit } from '@angular/core';
import packageJson from '../../../../package.json';

@Component({
  templateUrl: 'about.page.html'
})
export class AboutPage implements OnInit {

  date: Date = new Date();

  version = packageJson.version;

  constructor() { }

  ngOnInit() { }
}
