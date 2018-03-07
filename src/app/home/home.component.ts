import { Component, OnInit } from '@angular/core';
import {YoutubeService} from '../youtube.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  youTubeCallResponse = [];
  test;
  constructor(private youTubeCall: YoutubeService) { }



  ngOnInit() {
   this.youTubeCall.getData().subscribe((data: any) => {
     this.youTubeCallResponse = data.items;
     this.test = this.youTubeCallResponse[0].kind;
     console.log(this.youTubeCallResponse);
     console.log(this.test);
   }, err => {
     this.youTubeCallResponse = err;
     console.error('failed' + err);
   }, () => {
     console.log('completed');
   });
  }

}
