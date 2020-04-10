import { Component, OnInit ,Input} from '@angular/core';
import{Location} from '@angular/common';
import {ActivatedRoute} from '@angular/router';
import { ConfigService } from '../config.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
 post:{};
  constructor(private route:ActivatedRoute,private config:ConfigService, private loc:Location) { }

  ngOnInit() {
    let id =+/*return type willbe string*/ this.route.snapshot.paramMap.get('id');
    this.post=this.getpostbyid(id);
  }
  getpostbyid(id:number){
    return this.config.getopostbyid(id);
  }
  getback(){
    this.loc.back();
  }

}
