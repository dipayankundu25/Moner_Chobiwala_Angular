import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-baby',
  templateUrl: './baby.component.html',
  styleUrls: ['./baby.component.css'],
})
export class BabyComponent implements OnInit {
  constructor(private modalService: BsModalService) {}

  ngOnInit(): void {}

  babyLoadMore: boolean = false;
  babyLoadButton: boolean = true;

  babyLoad() {
    this.babyLoadMore = true;
    this.babyLoadButton = false;
  }

  modalRef?: BsModalRef;
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }
}
