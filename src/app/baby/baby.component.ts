import { Component, OnInit, TemplateRef } from '@angular/core';
import { ModalService } from '../modal.service';
// import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-baby',
  templateUrl: './baby.component.html',
  styleUrls: ['./baby.component.css'],
})
export class BabyComponent implements OnInit {
  constructor(private modalService: ModalService) {}

  ngOnInit(): void {}

  babyLoadMore: boolean = false;
  babyLoadButton: boolean = true;

  babyLoad() {
    this.babyLoadMore = true;
    this.babyLoadButton = false;
  }

  openModal() {
    this.modalService.openModal()
  }
}
