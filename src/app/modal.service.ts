import { Injectable, TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { ModalComponent } from './modal/modal.component';

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  modalRef?: BsModalRef;
  constructor(private modalService: BsModalService) {}

  openModal() {
    this.modalRef = this.modalService.show(ModalComponent);
  }
  closeModal() {
    this.modalRef?.hide();
  }
}
