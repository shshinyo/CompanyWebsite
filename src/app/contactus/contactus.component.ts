import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit {

  contactusform:FormGroup;
  constructor(private fb:FormBuilder) { }

  ngOnInit() {
    this.contactusform=this.fb.group({
      'firstname':[null,Validators.required],
      'lastname':[null,Validators.required],
      'email':[null,[Validators.required,Validators.email]],
      'password':[null,Validators.required]
    });
  }
  contact(formdata:NgForm){
    console.log(formdata);
  }

}
