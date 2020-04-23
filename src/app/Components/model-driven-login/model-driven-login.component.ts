import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-model-driven-login',
  templateUrl: './model-driven-login.component.html',
  styleUrls: ['./model-driven-login.component.css']
})
export class ModelDrivenLoginComponent implements OnInit {

  form: FormGroup;
        
  constructor(private fb : FormBuilder) {
        this.form = fb.group({
              "firstName": ["", Validators.required],
              "password":["", Validators.required]

        });
    }

  ngOnInit(): void {

  }
  onSubmit() {
        console.log("model-based form submitted");
        console.log(this.form);
    }


}
