import { Component, OnInit } from '@angular/core';
import { ConfigService} from '../config.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  header={ };
  constructor(private config:ConfigService) { }
  
  ngOnInit() {
    this.header = this.getheader();
  }
  getheader(){
    return this.config.getconfig().header;
  }

}
