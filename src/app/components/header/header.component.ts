// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-header',
//   templateUrl: './header.component.html',
//   styleUrls: ['./header.component.scss'],
// })
// export class HeaderComponent  implements OnInit {

//   constructor() { }

//   ngOnInit() {}

// }

import { Component, OnInit, Input } from '@angular/core';
import { NavController, MenuController, IonMenu } from '@ionic/angular';
import { IonicModule } from '@ionic/angular';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  standalone:true,
  imports: [IonicModule]
})
export class HeaderComponent implements OnInit {
@Input() titulo:string;
  constructor(
    public navCtrl:NavController,
    private menuCrl:MenuController,

  ) { }

  ngOnInit() {}

  toggleMenu(){
       
    
    this.menuCrl.toggle();

      }

}

