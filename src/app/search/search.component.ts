import { Component, OnInit } from '@angular/core';
import {LatestVideoService} from "../video-list/latest-video.service";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  providers: [
    LatestVideoService
  ]
})
export class SearchComponent implements OnInit {
  videos: any[] = [];
  phrase: string;

  constructor(private latestVideoService: LatestVideoService) { }

  ngOnInit() {
    this.latestVideoService.getVideos()
      .then((VIDEOS) => {
        this.videos = VIDEOS;
      })
  }

  search(phrase: string) {
    if (!phrase) return;

    this.latestVideoService.getVideosByTitle(phrase)
      .then((videos) => {
        this.videos = videos;
      })
  }


}
