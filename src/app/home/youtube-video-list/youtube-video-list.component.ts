import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-youtube-video-list',
  templateUrl: './youtube-video-list.component.html',
  styleUrls: ['./youtube-video-list.component.css']
})
export class YoutubeVideoListComponent implements OnInit {

  constructor() { }
  @Input thumbNail;
  @Input description;
  ngOnInit() {
  }

}
