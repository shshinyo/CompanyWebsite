import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PagerService {

  constructor() { }

  getpager(totalitems: number, currentpage: number = 1, pagesize: number = 10) {

      let totalpages = Math.ceil( totalitems / pagesize);

      // ensure that this do not fall out of bounds
      if (currentpage < 1) {
        currentpage = 1;
      } else if (currentpage > totalpages) {
        currentpage = totalpages;
      }

      let startpage: number;
      let endpage: number;

      if (totalpages <= 10) {
        startpage = 1;
        endpage = totalpages;
      } else {
        // if more that 10 pages
        if ( currentpage <= 6) {
          startpage = 1;
          endpage = 10;
        } else if ( currentpage + 4 >= totalpages) {
          startpage = totalpages - 9;
          endpage = totalpages;
        } else {
          startpage = currentpage - 5;
          endpage = currentpage + 4;
        }
      }

      // calculate start and end indexitems
      let startindex = (currentpage - 1) * pagesize;
      let endindex = Math.min((startindex + pagesize - 1), (totalitems - 1));

      // create and array of pages
      let pages = Array.from(Array((endpage + 1) - startpage).keys()).map(i => startpage + i );

      return {
        totalitems: totalitems,
        currentpage: currentpage,
        pagesize: pagesize,
        totalpages: totalpages,
        startpage: startpage,
        endpage: endpage,
        startindex: startindex,
        endindex: endindex,
        pages: pages
      };
  }
}