import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GifService {

  constructor(
    private http: HttpClient
  ) { }

  getGif(tag) {
    const url = `https://api.giphy.com/v1/gifs/random?api_key=gTJAO48YcpmrADUyo4opy4ES4g7iDBxx&tag=${tag}`;

    return this.http.get(url).toPromise();
  }

}
