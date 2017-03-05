import { Injectable } from '@angular/core';

@Injectable()
export class SortingService {

  constructor() { }

  ascending(a: any, b: any) {
    if (a.title > b.title) return 1;
    if (a.title < b.title) return -1;
    return 0;
  }

  descending(a: any, b: any) {
    if (a.title < b.title) return 1;
    if (a.title > b.title) return -1;
    return 0;
  }
}
