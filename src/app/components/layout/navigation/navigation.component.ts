import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'appemon-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  @Output() onLinkClicked: EventEmitter<any> = new EventEmitter();

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goTo(route: string[]): void {
    this.router.navigate(route);
    this.onLinkClicked.emit(route);
  }

}
