import { Component, OnInit } from '@angular/core';
import {ConfigService} from '../config.service';

@Component({
  selector: 'app-testmonial',
  templateUrl: './testmonial.component.html',
  styleUrls: ['./testmonial.component.css']
})
export class TestmonialComponent implements OnInit {
 test={};
  constructor(private config:ConfigService) { }
gettestimonial(){
  return this.config.getconfig().testimonial;
}
  ngOnInit() {
    this.test=this.gettestimonial();
  }

}
