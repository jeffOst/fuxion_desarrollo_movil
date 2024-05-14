import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import{ MenuComponent } from "./../app/components/menu/menu.component";
//  import { register } from 'swiper/element/bundle';
//  register();



@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: true,
  imports: [IonicModule,MenuComponent],
})
export class AppComponent {
  constructor() {}
}
