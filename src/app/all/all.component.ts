import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-all',
  templateUrl: './all.component.html',
  styleUrls: ['./all.component.css'],
})
export class AllComponent implements OnInit {
  constructor(private modalService: BsModalService) {}

  ngOnInit(): void {}

  allLoadMore: boolean = false;
  allLoadButton: boolean = true;

  allLoad() {
    this.allLoadMore = true;
    this.allLoadButton = false;
  }

  modalRef?: BsModalRef;
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }
}
