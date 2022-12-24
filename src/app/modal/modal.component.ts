import { Component, OnInit } from '@angular/core';
import { ModalService } from '../modal.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
})
export class ModalComponent implements OnInit {
  constructor(private modalService: ModalService) {}
  imgUrl = '';
  ngOnInit(): void {
    this.modalService.currentUrl.subscribe((res) => {
      console.log(res);
      this.imgUrl = res;
    });
    console.log();
    console.log('Modal loaded');
  }
  closeModal() {
    this.modalService.closeModal();
  }
}
