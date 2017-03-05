import {Component, OnInit, Input} from '@angular/core';

function Print() {
  return (target, key, descriptor) => {
    const old = descriptor.value;

    descriptor.value = () => {
      const name = old();
      console.log(name);
    };
  }
}

@Component({
  selector: 'app-video-detail',
  templateUrl: './video-detail.component.html',
  styleUrls: ['./video-detail.component.css']
})

export class VideoDetailComponent implements OnInit {
  @Input() video: any;

  constructor() {
    this.getName();
  }

  ngOnInit() {
  }

  @Print()
  getName() {
    return 'Daniel';
  }
}
