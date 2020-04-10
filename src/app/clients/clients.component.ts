import { Component, OnInit } from '@angular/core';
import {ConfigService} from '../config.service';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {
  clientheader={};
   
  constructor(private config :ConfigService) { }

  ngOnInit() {
    this.clientheader=this.getclienttitle();
  }
  getclienttitle(){
    return this.config.getconfig().clientheader;
  }

}
