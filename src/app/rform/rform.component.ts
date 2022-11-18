import { computeMsgId } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-rform',
  templateUrl: './rform.component.html',
  styleUrls: ['./rform.component.scss']
})
export class RformComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  formOne = new FormGroup({
    field1: new FormControl(),
    field2: new FormControl(),
    field3: new FormControl()
  }); 

  send(): void {
    var f1_val = this.formOne.value.field1;
    var f2_val = this.formOne.value.field2;
    var f3_val = this.formOne.value.field1;
    alert(`Value 1: ${f1_val}, Value 2 ${f2_val}, Value 3 ${f3_val}`);
  }

}
