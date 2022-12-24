import { Component, OnInit, TemplateRef } from '@angular/core';
import { ModalService } from '../modal.service';


@Component({
  selector: 'app-pre-wedding',
  templateUrl: './pre-wedding.component.html',
  styleUrls: ['./pre-wedding.component.css'],
})
export class PreWeddingComponent implements OnInit {
  constructor(private modalService: ModalService) {}

  ngOnInit(): void {}

  preWeddingLoadMore: boolean = false;
  preWeddingLoadButton: boolean = true;

  preWeddingLoad() {
    this.preWeddingLoadMore = true;
    this.preWeddingLoadButton = false;
  }

  openModal(event:any) {
   this.modalService.openModal(event.target.src);
  }
}
