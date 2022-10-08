import { computeMsgId } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-rform',
  templateUrl: './rform.component.html',
  styleUrls: ['./rform.component.scss']
})
export class RformComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  field1 = new FormControl('');
  field2 = new FormControl('');
  field3 = new FormControl('');

  send() {
    var f1_val = (document.getElementById("field1") as HTMLInputElement).value;
    var f2_val = (document.getElementById("field2") as HTMLInputElement).value;
    var f3_val = (document.getElementById("field3") as HTMLInputElement).value;
    alert(f1_val + ', ' + f2_val + ', ' +f3_val);
  }

}
