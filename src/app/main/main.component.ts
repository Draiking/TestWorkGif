import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { GifInterface } from '../interface/gif.interface';
import { GifService } from '../service/gif.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  @ViewChild('input', {static: true}) input: ElementRef;

  textInput = '';

  gifs: Array<GifInterface> = [];

  constructor(
    private gifService: GifService
  ) { }

  ngOnInit(): void {
  }

  tegInput(event: string) {
    this.textInput = event;
    
  }

  search() {
    const tag = this.textInput;
    this.gifService.getGif(tag)
    .then((res: any) => {
      console.log(res);
      this.gifs.push(res.data);
    })
  }

}
