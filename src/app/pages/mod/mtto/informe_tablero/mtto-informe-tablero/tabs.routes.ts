import { MttoWinInformeTablero1Page } from './../mtto-win-informe-tablero1/mtto-win-informe-tablero1.page';
//import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MttoInformeTableroPage } from './mtto-informe-tablero.page';

export const routes: Routes = [
  {
    path: '',
    component: MttoInformeTableroPage,
    children: [
      {
        path: '',
        //redirectTo: '/mtto-checklist-win-montaje/page1',
        pathMatch: 'full',
        loadComponent:()=> import('../mtto-win-informe-tablero1/mtto-win-informe-tablero1.page').then(m=>m.MttoWinInformeTablero1Page)
      },
      {
        path:'page1',
        loadComponent:()=> import('../mtto-win-informe-tablero1/mtto-win-informe-tablero1.page').then(m=>m.MttoWinInformeTablero1Page)
      },
      {
        path:'page2',
        loadComponent:()=> import('../mtto-win-informe-tablero2/mtto-win-informe-tablero2.page').then(m=>m.MttoWinInformeTablero2Page)
      },
      {
        path:'page3',
        loadComponent:()=> import('../mtto-win-informe-tablero3/mtto-win-informe-tablero3.page').then(m=>m.MttoWinInformeTablero3Page)
      },
      {
        path:'page5',
        loadComponent:()=> import('../mtto-win-informe-tablero5/mtto-win-informe-tablero5.page').then(m=>m.MttoWinInformeTablero5Page)
      },
      {
        path:'page4',
        loadComponent:()=> import('../mtto-win-informe-tablero4/mtto-win-informe-tablero4.page').then(m=>m.MttoWinInformeTablero4Page)
      }
    ]
  }
];

// @NgModule({
//   imports: [RouterModule.forChild(routes)],
//   exports: [RouterModule],
// })
// export class MttoChecklistWinMontajePageRoutingModule {}
