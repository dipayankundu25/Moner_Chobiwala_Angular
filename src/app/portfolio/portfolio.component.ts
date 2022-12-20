import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css'],
})
export class PortfolioComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  allShow: boolean = true;
  weddingShow: boolean = false;
  preWeddingShow: boolean = false;
  babyShow: boolean = false;
  videoShow: boolean = false;

  video() {
    this.videoShow = true;
    this.allShow = false;
    this.weddingShow = false;
    this.preWeddingShow = false;
    this.babyShow = false;
  }

  wedding() {
    this.weddingShow = true;
    this.allShow = false;
    this.preWeddingShow = false;
    this.babyShow = false;
    this.videoShow = false;
  }

  preWedding() {
    this.preWeddingShow = true;
    this.allShow = false;
    this.weddingShow = false;
    this.babyShow = false;
    this.videoShow = false;
  }

  baby() {
    this.babyShow = true;
    this.allShow = false;
    this.weddingShow = false;
    this.preWeddingShow = false;
    this.videoShow = false;
  }

  all() {
    this.allShow = true;
    this.weddingShow = false;
    this.preWeddingShow = false;
    this.babyShow = false;
    this.videoShow = false;
    return this.allShow === true ? 'rgb(226, 193, 4)' : 'black';
  }

  getColorAll() {
    return this.allShow === true ? 'rgb(226, 193, 4)' : 'black';
  }

  getColorWedding() {
    return this.weddingShow === true ? 'rgb(226, 193, 4)' : 'black';
  }

  getColorPreWedding() {
    return this.preWeddingShow === true ? 'rgb(226, 193, 4)' : 'black';
  }

  getColorBaby() {
    return this.babyShow === true ? 'rgb(226, 193, 4)' : 'black';
  }

  getColorVideo() {
    return this.videoShow === true ? 'rgb(226, 193, 4)' : 'black';
  }
}
