import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-wedding',
  templateUrl: './wedding.component.html',
  styleUrls: ['./wedding.component.css'],
})
export class WeddingComponent implements OnInit {
  constructor(private modalService: BsModalService) {}

  ngOnInit(): void {}

  weddingLoadMore: boolean = false;
  weddingLoadButton: boolean = true;

  weddingLoad() {
    this.weddingLoadMore = true;
    this.weddingLoadButton = false;
  }

  modalRef?: BsModalRef;
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }
}
