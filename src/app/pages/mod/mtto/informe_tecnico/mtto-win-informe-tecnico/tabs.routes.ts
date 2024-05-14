import { MttoWinInformeTecnico1Page } from './../mtto-win-informe-tecnico1/mtto-win-informe-tecnico1.page';
//import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MttoWinInformeTecnicoPage } from './mtto-win-informe-tecnico.page';

export const routes: Routes = [
  {
    path: '',
    component: MttoWinInformeTecnicoPage,
    children: [
      {
        path: '',
        //redirectTo: '/mtto-checklist-win-montaje/page1',
        pathMatch: 'full',
        loadComponent:()=> import('../mtto-win-informe-tecnico1/mtto-win-informe-tecnico1.page').then(m=>m.MttoWinInformeTecnico1Page)
      },
      {
        path:'page1',
        loadComponent:()=> import('../mtto-win-informe-tecnico1/mtto-win-informe-tecnico1.page').then(m=>m.MttoWinInformeTecnico1Page)
      },
      {
        path:'page2',
        loadComponent:()=> import('../mtto-win-informe-tecnico2/mtto-win-informe-tecnico2.page').then(m=>m.MttoWinInformeTecnico2Page)
      }
      ,
      {
        path:'page3',
        loadComponent:()=> import('../mtto-win-informe-tecnico3/mtto-win-informe-tecnico3.page').then(m=>m.MttoWinInformeTecnico3Page)
      },
      {
        path:'page4',
        loadComponent:()=> import('../mtto-win-informe-tecnico4/mtto-win-informe-tecnico4.page').then(m=>m.MttoWinInformeTecnico4Page)
      }
      ,
      {
        path:'page5',
        loadComponent: () => import('../mtto-win-informe-tecnico5/mtto-win-informe-tecnico5.page').then(m=>m.MttoWinInformeTecnico5Page)
      },
      {
        path:'page6',
        loadComponent: () => import('../mtto-win-informe-tecnico6/mtto-win-informe-tecnico6.page').then(m=>m.MttoWinInformeTecnico6Page)
      }
    ]
  }
];

// @NgModule({
//   imports: [RouterModule.forChild(routes)],
//   exports: [RouterModule],
// })
// export class MttoChecklistWinMontajePageRoutingModule {}
