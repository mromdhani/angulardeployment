import { Component, OnInit } from '@angular/core';
import { IUser } from 'src/app/domain/iuser';

@Component({
  selector: 'app-template-driven-login',
  templateUrl: './template-driven-login.component.html',
  styleUrls: ['./template-driven-login.component.css']
})
export class TemplateDrivenLoginComponent implements OnInit {

  user : IUser = {firstName:'Teo', password: 'password'};

  constructor() { }

  ngOnInit(): void {
  }
  onSubmitTemplateBased(obj) {
    console.log (obj)
  }

}
