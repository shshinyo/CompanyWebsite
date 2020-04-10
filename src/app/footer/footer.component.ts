import { Component, OnInit } from '@angular/core';
import {ConfigService} from '../config.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
footerdata={};
  constructor(private config :ConfigService) { }
getfooter(){

  return this.config.getconfig().footer;
}
  ngOnInit() {
    this.footerdata=this.getfooter();
  }

}
