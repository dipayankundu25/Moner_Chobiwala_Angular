import { Injectable, TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { ModalComponent } from './modal/modal.component';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  modalRef?: BsModalRef;
  private urlSource = new BehaviorSubject('');
  currentUrl = this.urlSource.asObservable();
  constructor(private modalService: BsModalService) {}

  openModal(url:string) {
    this.urlSource.next(url);
    this.modalRef = this.modalService.show(ModalComponent);
  }
  closeModal() {
    this.modalRef?.hide();
  }
}
