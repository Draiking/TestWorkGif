import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { GifInterface } from '../interface/gif.interface';
import { GifService } from '../service/gif.service';
import * as _ from 'lodash';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  @ViewChild('input', {static: true}) input: ElementRef;

  textInput = '';

  gifs: Array<GifInterface> = [];
  inputLenght;
  tags = [];

  constructor(
    private gifService: GifService
  ) { }

  ngOnInit(): void {
  }

  tegInput(event: string) {
    this.textInput = event;
    this.inputLenght = event.length;
  }

  search() {
    const tag = this.textInput;
    if (this.inputLenght > 0) {
      this.gifService.getGif(tag)
      .then((res: any) => {
        console.log(res);
        res.data.myType = tag;
        this.tags.push(tag);
        this.tags = _.uniq(this.tags);
        this.gifs.push(res.data);
      })
    } else {
      alert('Ввудите тэг для поиска');
    }
  }

  group() {
    console.log(this.tags)
  }

}
