import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-modal-horometro-fin',
  templateUrl: './modal-horometro-fin.page.html',
  styleUrls: ['./modal-horometro-fin.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class ModalHorometroFinPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
