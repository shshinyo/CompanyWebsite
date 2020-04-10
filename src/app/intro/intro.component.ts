import { Component, OnInit } from '@angular/core';
import {ConfigService} from '../config.service';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.css']
})
export class IntroComponent implements OnInit {
  introheading={};
  constructor(private config:ConfigService ) { }

  getintroheading(){
    return this.config.getconfig().intro;
  }
  ngOnInit() {
    this.introheading=this.getintroheading();
    }

}
