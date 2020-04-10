import { Component, OnInit } from '@angular/core';
import {ConfigService} from '../config.service';
import{PagerService} from '../pager.service';


@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
 
 blog:any={};
 allitems:any[];
 pages:any[];
 pager:any={};
 pagesize=4;
 
  constructor(private config:ConfigService,private pagerservice:PagerService) { }

  ngOnInit() {
    this.blog=this.getblog();
    this.allitems=this.blog.posts;
    this.setpage(1);
  }
  getblog(){
    return this.config.getconfig().blog;
  }
  setpage(pageNumber: number) {
    // create a pager using paging service
    this.pager = this.pagerservice.getpager(this.allitems.length, pageNumber, this.pagesize);

    // current page posts
    this.pages = this.allitems.slice(this.pager.startindex, this.pager.endindex + 1);

   
  }

}
