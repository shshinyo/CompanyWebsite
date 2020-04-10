import { Component, OnInit,Input,Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {
@Input() pager;
@Output() settpage:EventEmitter<any> =new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  setcurrentpage(pagenumber:number){
    this.settpage.emit(pagenumber)
  }
}
