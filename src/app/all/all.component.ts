import { Component, OnInit, TemplateRef } from '@angular/core';
import { ModalService } from '../modal.service';


@Component({
  selector: 'app-all',
  templateUrl: './all.component.html',
  styleUrls: ['./all.component.css'],
})
export class AllComponent implements OnInit {
  constructor(private modalService: ModalService) {}

  ngOnInit(): void {}

  allLoadMore: boolean = false;
  allLoadButton: boolean = true;

  allLoad() {
    this.allLoadMore = true;
    this.allLoadButton = false;
  }

  openModal(event:any) {
    this.modalService.openModal(event.target.src)
  }
}
