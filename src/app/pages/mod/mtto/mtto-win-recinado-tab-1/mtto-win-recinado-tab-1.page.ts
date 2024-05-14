import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-mtto-win-recinado-tab-1',
  templateUrl: './mtto-win-recinado-tab-1.page.html',
  styleUrls: ['./mtto-win-recinado-tab-1.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class MttoWinRecinadoTab1Page implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
