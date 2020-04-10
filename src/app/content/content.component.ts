import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../config.service';


@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
   contentt={};
  constructor(private config:ConfigService) { }
  getcontentheading(){
    return this.config.getconfig().content;
  }

  ngOnInit() {
    this.contentt=this.getcontentheading();
  }

}
