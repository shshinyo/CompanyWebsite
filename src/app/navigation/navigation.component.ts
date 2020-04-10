import { Component, OnInit } from '@angular/core';
import{Location} from '@angular/common';
import { AuthenticationService } from '../authentication.service';
import * as $ from 'jquery';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
activetab:string ='';
  constructor(private location:Location, private auth: AuthenticationService) { }

  ngOnInit() {
    $(document).ready(function () {
      /* Video Lightbox */
      if (!!$.prototype.simpleLightboxVideo) {
        $('.video').simpleLightboxVideo();
      }
    
      /*ScrollUp*/
      if (!!$.prototype.scrollUp) {
        $.scrollUp();
      }
    
      /*Responsive Navigation*/
      $("#nav-mobile").html($("#nav-main").html());
      $("#nav-trigger span").on("click",function() {
        if ($("nav#nav-mobile ul").hasClass("expanded")) {
          $("nav#nav-mobile ul.expanded").removeClass("expanded").slideUp(250);
          $(this).removeClass("open");
        } else {
          $("nav#nav-mobile ul").addClass("expanded").slideDown(250);
          $(this).addClass("open");
        }
      });
    
      $("#nav-mobile").html($("#nav-main").html());
      $("#nav-mobile ul a").on("click",function() {
        if ($("nav#nav-mobile ul").hasClass("expanded")) {
          $("nav#nav-mobile ul.expanded").removeClass("expanded").slideUp(250);
          $("#nav-trigger span").removeClass("open");
        }
      });
 
    });
                    
  }
  
  logout() {
    this.auth.logout();
  }

}
