import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  @ViewChild('input', {static: true}) input: ElementRef;

  textInput = '';

  constructor() { }

  ngOnInit(): void {
  }

  tegInput(event: string) {
    this.textInput = event;
    
  }

  search() {
    const tag = this.textInput
  }

}
