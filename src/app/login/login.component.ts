import { Component, OnInit } from '@angular/core';
import {YoutubeService} from '../youtube.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: String;
  password: String;

  navigateToHome(){
    this.router.navigate(['home']);
  }
  constructor(private router: Router) { }

  ngOnInit() {
  }

}
