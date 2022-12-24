import { Component, OnInit, TemplateRef } from '@angular/core';
import { ModalService } from '../modal.service';

@Component({
  selector: 'app-wedding',
  templateUrl: './wedding.component.html',
  styleUrls: ['./wedding.component.css'],
})
export class WeddingComponent implements OnInit {
  constructor(private modalService: ModalService) {}

  ngOnInit(): void {}

  weddingLoadMore: boolean = false;
  weddingLoadButton: boolean = true;

  weddingLoad() {
    this.weddingLoadMore = true;
    this.weddingLoadButton = false;
  }

  openModal() {
    this.modalService.openModal()
  }
}
