import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-pre-wedding',
  templateUrl: './pre-wedding.component.html',
  styleUrls: ['./pre-wedding.component.css'],
})
export class PreWeddingComponent implements OnInit {
  constructor(private modalService: BsModalService) {}

  ngOnInit(): void {}

  preWeddingLoadMore: boolean = false;
  preWeddingLoadButton: boolean = true;

  preWeddingLoad() {
    this.preWeddingLoadMore = true;
    this.preWeddingLoadButton = false;
  }

  modalRef?: BsModalRef;
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }
}
