
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/throw';
import {Injectable} from '@angular/core';
import {HttpClient, HttpClientModule, HttpErrorResponse} from '@angular/common/http';


@Injectable()
export class YoutubeService {

  constructor(private httpClient: HttpClient) {
  }

  getData() {
    return this.httpClient.get('https://www.googleapis.com/' +
      'youtube/v3/search?order=date&part=snippet&channelId=UCP4g5qGeUSY7OokXfim1QCQ&key' +
      '=AIzaSyCmedFZ2QVVzQ1cElmU6kPM2PV5YEaQwhY');
  }
}
