import { Component, OnInit } from '@angular/core';
import {LatestVideoService} from "../video-list/latest-video.service";
import {SortingService} from "../video-list/sorting.service";

@Component({
  selector: 'app-latest-video-list',
  templateUrl: './latest-video-list.component.html',
  styleUrls: ['./latest-video-list.component.css'],
  providers: [
    LatestVideoService,
    SortingService
  ]
})
export class LatestVideoListComponent implements OnInit {
  videos: any[] = [];

  constructor(private latestVideoService: LatestVideoService,
              private sortingService: SortingService) { }

  ngOnInit() {
    this.latestVideoService.getVideosWithVisitCount()
      .then((VIDEOS) => {
        this.videos = VIDEOS.sort(this.sortingService.sortByVisitCount);
        console.log(this.videos);
      })
  }

}
