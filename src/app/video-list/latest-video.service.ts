import { Injectable } from '@angular/core';
import { VIDEOS } from './mock-videos';

@Injectable()
export class LatestVideoService {

  constructor() { }

  getVideos(): Promise<any[]> {
    return new Promise(function (resolve) {
      setTimeout(function () {
        resolve(VIDEOS);
      }, 1000);
    });
  }

  getVideo(id): Promise<any> {
    return this.getVideos()
      .then((videos) => videos.find((video) => video.id === id));
  }

  getVideosByTitle(phrase) {
    return this.getVideos()
      .then((videos) => videos.filter((video) => video.title.toLowerCase().includes(phrase.toLowerCase())));
  }
}
