import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ctr',
  templateUrl: './ctr.component.html',
  styleUrls: ['./ctr.component.css']
})
export class CtrComponent implements OnInit {

  public contador:number=0
  constructor() { }

  ngOnInit() {
  }

  dec(){
    this.contador-- 
  }

  inc(){
    this.contador++
  }

}
