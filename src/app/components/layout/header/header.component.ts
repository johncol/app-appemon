import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'appemon-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Output() onMenuToggle: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

}
