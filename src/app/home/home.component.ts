import { Component, OnInit, TemplateRef } from '@angular/core';
import { Router } from '@angular/router';
import { ModalService } from '../modal.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(private router: Router, private modalService: ModalService) {}

  ngOnInit(): void {}

  portfoilo() {
    this.router.navigateByUrl('portfoilo');
  }
  service() {
    this.router.navigateByUrl('service');
  }

  openModal() {
    this.modalService.openModal();
  }
}
