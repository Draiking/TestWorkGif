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

  textInput = '';

  buttonValue: string = 'Загрузить';
  loadButton: boolean = true;

  groupBoolean: boolean = true;

  gifs: Array<GifInterface> = [];
  inputLenght: any;
  tags = [];
  gifsGroupArr = [];
  gifsGroup = {};

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
      this.loadButton = false;
      this.buttonValue = 'Загрузка...';
      this.gifService.getGif(tag)
        .then((res: any) => {
          if (!res.data.image_url) {
            alert('По тэгу ничего не найдено');
          } else {
            res.data.myType = tag;
            this.tags.push(tag);
            this.tags = _.uniq(this.tags);
            this.gifs.push(res.data);
          }
        })
      setTimeout(() => {
        this.buttonValue = 'Загрузить';
        this.loadButton = true;
      }, 500)
    } else {
      alert('Ввудите тэг для поиска');
    }
  }

  editTag(typeTag) {
    this.textInput = typeTag;
  }
  
  clear() {
    this.textInput = '';
    this.gifs = [];
    this.gifsGroupArr = [];
    this.groupBoolean = true;
  }

  group() {
    this.gifsGroupArr = [];
    this.gifsGroup = {}
    for (let item of this.gifs) {
      if (!this.gifsGroup[item.myType]) {
        this.gifsGroup[item.myType] = [];
      }
      this.gifsGroup[item.myType].push(item)
    }
    _.each(this.gifsGroup, (arr) => {
      this.gifsGroupArr.push(arr);
    })
  }

  unGroup() {
    this.gifsGroupArr = [];
  }

}
