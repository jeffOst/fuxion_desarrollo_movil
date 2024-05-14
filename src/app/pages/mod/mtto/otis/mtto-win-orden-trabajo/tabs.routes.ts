import { MttoWinOrdenTrabajo1Page } from './../mtto-win-orden-trabajo1/mtto-win-orden-trabajo1.page';
//import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MttoWinOrdenTrabajoPage } from './mtto-win-orden-trabajo.page';

export const routes: Routes = [
  {
    path: '',
    component: MttoWinOrdenTrabajoPage,
    children: [
      {
        path: '',
        //redirectTo: '/mtto-checklist-win-montaje/page1',
        pathMatch: 'full',
        loadComponent:()=> import('../mtto-win-orden-trabajo1/mtto-win-orden-trabajo1.page').then(m=>m.MttoWinOrdenTrabajo1Page)
      },
      {
        path:'page1',
        loadComponent:()=> import('../mtto-win-orden-trabajo1/mtto-win-orden-trabajo1.page').then(m=>m.MttoWinOrdenTrabajo1Page)
      },
      {
        path:'page2',
        loadComponent:()=> import('../mtto-win-orden-trabajo2/mtto-win-orden-trabajo2.page').then(m=>m.MttoWinOrdenTrabajo2Page)
      }
      ,
      {
        path:'page3',
        loadComponent:()=> import('../mtto-win-orden-trabajo3/mtto-win-orden-trabajo3.page').then(m=>m.MttoWinOrdenTrabajo3Page)
      },
      {
        path:'page4',
        loadComponent:()=> import('../mtto-win-orden-trabajo4/mtto-win-orden-trabajo4.page').then(m=>m.MttoWinOrdenTrabajo4Page)
      }
      ,
      {
        path:'page5',
        loadComponent:()=> import('../mtto-win-orden-trabajo5/mtto-win-orden-trabajo5.page').then(m=>m.MttoWinOrdenTrabajo5Page)
      }
      ,{
        path:'page6',
        loadComponent: () => import('../mtto-win-orden-trabajo6/mtto-win-orden-trabajo6.page').then(m=>m.MttoWinOrdenTrabajo6Page)
      }
    ]
  }
];

// @NgModule({
//   imports: [RouterModule.forChild(routes)],
//   exports: [RouterModule],
// })
// export class MttoChecklistWinMontajePageRoutingModule {}
