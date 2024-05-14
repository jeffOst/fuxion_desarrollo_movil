//import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MttoChecklistWinMontajePage } from './mtto-checklist-win-montaje-page';

export const routes: Routes = [
  {
    path: '',
    component: MttoChecklistWinMontajePage,
    children: [
      {
        path: '',
        //redirectTo: '/mtto-checklist-win-montaje/page1',
        pathMatch: 'full',
        loadComponent:()=> import('../mtto-checklist-win-montaje1/mtto-checklist-win-montaje1.page').then(m=>m.MttoChecklistWinMontaje1Page)
      },
      {
        path:'page1',
        loadComponent: () => import('../mtto-checklist-win-montaje1/mtto-checklist-win-montaje1.page').then(m=>m.MttoChecklistWinMontaje1Page)
      },
      {
        path:'page2',
        loadComponent: () => import('../mtto-checklist-win-montaje2/mtto-checklist-win-montaje2.page').then(m=>m.MttoChecklistWinMontaje2Page)
      }
      ,
      {
        path:'page3',
        loadComponent: () => import('../mtto-checklist-win-montaje3/mtto-checklist-win-montaje3.page').then(m=>m.MttoChecklistWinMontaje3Page)
      },
      {
        path:'page4',
        loadComponent: () => import('../mtto-checklist-win-montaje4/mtto-checklist-win-montaje4.page').then(m=>m.MttoChecklistWinMontaje4Page)
      },
      {
        path:'page5',
        loadComponent: () => import('../mtto-checklist-win-montaje5/mtto-checklist-win-montaje5.page').then(m=>m.MttoChecklistWinMontaje5Page)
      },
      {
        path:'page6',
        loadComponent: () => import('../mtto-checklist-win-montaje6/mtto-checklist-win-montaje6.page').then(m=>m.MttoChecklistWinMontaje6Page)
      }
    ]
  }
];

// @NgModule({
//   imports: [RouterModule.forChild(routes)],
//   exports: [RouterModule],
// })
// export class MttoChecklistWinMontajePageRoutingModule {}
