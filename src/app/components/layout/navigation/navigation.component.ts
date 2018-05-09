import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

import { NavigationItem } from './navigation-item.model';

@Component({
  selector: 'appemon-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  @Output() onLinkClicked: EventEmitter<any> = new EventEmitter();
  items: NavigationItem[];

  constructor(private router: Router) { }

  ngOnInit() {
    this.initilizeNavigationItems();
  }

  private initilizeNavigationItems(): void {
    this.items = [
      NavigationItem.of('Missing', ['/missing']),
      NavigationItem.of('Searching', ['/searching']),
      NavigationItem.of('Not released yet', ['/not-released-yet']),
      NavigationItem.of('Search', ['/search'])
    ];
  }

}
