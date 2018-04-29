import { Component, OnInit, NgZone, OnDestroy } from '@angular/core';
import { MediaQueryService } from '../../services/media-query.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'appemon-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit, OnDestroy {
  isSmallScreen: boolean;
  subscriptions: Subscription[] = [];

  constructor(
    private ngZone: NgZone,
    private mediaQuery: MediaQueryService
  ) { }

  ngOnInit() {
    const mediaSubscription: Subscription = this.mediaQuery.medium.subscribe(isSmallScreen => {
      this.ngZone.run(() => this.isSmallScreen = isSmallScreen);
    });
    this.subscriptions.push(mediaSubscription);
  }

  ngOnDestroy(): void {
    this.subscriptions
      .filter(subscription => subscription != null)
      .filter(subscription => !subscription.closed)
      .forEach(subscription => subscription.unsubscribe());
  }
}
