import { Routes, RouterModule } from '@angular/router';
import { MttoWinRecinadoPage } from '../mtto-win-recinado/mtto-win-recinado.page';

export const routes: Routes = [
  {
    path: '',
    component: MttoWinRecinadoPage,
    children: [
      {
        path: '',
        //redirectTo: '/mtto-checklist-win-montaje/page1',
        pathMatch: 'full',
        loadComponent:()=> import('../mtto-win-recinado-tab-1/mtto-win-recinado-tab-1.page').then(m=>m.MttoWinRecinadoTab1Page)
      },
      {
        path:'page1',
        loadComponent:()=> import('../mtto-win-recinado-tab-1/mtto-win-recinado-tab-1.page').then(m=>m.MttoWinRecinadoTab1Page)
      },
      {
        path:'page2',
        loadComponent:()=> import('../mtto-win-recinado-tab-2/mtto-win-recinado-tab-2.page').then(m=>m.MttoWinRecinadoTab2Page)
      }
    ]
  }
];

// @NgModule({
//   imports: [RouterModule.forChild(routes)],
//   exports: [RouterModule],
// })
// export class MttoChecklistWinMontajePageRoutingModule {}

