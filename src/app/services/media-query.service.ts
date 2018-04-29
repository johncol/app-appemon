import { Injectable, NgZone } from '@angular/core';

import { BREAKPOINTS } from '../config/breakpoints';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class MediaQueryService {
  readonly medium: Observable<boolean>;

  constructor() {
    this.medium = this.mediaMatcherFor(BREAKPOINTS.medium);
  }

  private mediaMatcherFor(media: number): Observable<boolean> {
    const mediumMediaMatcher: MediaQueryList = matchMedia(`(max-width: ${media}px)`);
    return new Observable(observer => {
      observer.next(mediumMediaMatcher.matches);
      mediumMediaMatcher.addListener(media => observer.next(media.matches));
    });
  }

}
