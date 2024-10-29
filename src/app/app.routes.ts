import { Routes } from '@angular/router';
import { AuthGuardService } from "src/app/api/auth-guard.service";

export const routes: Routes = [
  {
    path: 'mtto-checklist-win-montaje',
    loadChildren: () => import('./pages/mod/mtto/checklist/mtto-checklist-win-montaje-page/tabs.routes').then((m) => m.routes),
    canActivate: [AuthGuardService], data: { loginRoute: '/login' }
  },
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
    canActivate: [AuthGuardService], data: { loginRoute: 'login' }
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'first',
    loadComponent: () => import('./pages/first/first.page').then(m => m.FirstPage)
  },
  {
    path: 'login',
    loadComponent: () => import('./pages/login/login.page').then(m => m.LoginPage)
  },
  {
    path: 'mtto-checklist-list-montaje',
    loadComponent: () => import('./pages/mod/mtto/checklist/mtto-checklist-list-montaje/mtto-checklist-list-montaje.page').then(m => m.MttoChecklistListMontajePage),
    canActivate: [AuthGuardService], data: { loginRoute: '/login' }
  },
  {
    path: 'mtto-checklist-win-montaje',
    loadComponent: () => import('./pages/mod/mtto/checklist/mtto-checklist-win-montaje-page/mtto-checklist-win-montaje-page').then(m => m.MttoChecklistWinMontajePage),
    canActivate: [AuthGuardService], data: { loginRoute: '/login' }
  },
  {
    path: 'mtto-checklist-win-montaje3',
    loadComponent: () => import('./pages/mod/mtto/checklist/mtto-checklist-win-montaje3/mtto-checklist-win-montaje3.page').then(m => m.MttoChecklistWinMontaje3Page)
  },
  {
    path: 'mtto-checklist-win-montaje4',
    loadComponent: () => import('./pages/mod/mtto/checklist/mtto-checklist-win-montaje4/mtto-checklist-win-montaje4.page').then(m => m.MttoChecklistWinMontaje4Page)
  },
  {
    path: 'mtto-checklist-win-montaje5',
    loadComponent: () => import('./pages/mod/mtto/checklist/mtto-checklist-win-montaje5/mtto-checklist-win-montaje5.page').then(m => m.MttoChecklistWinMontaje5Page)
  },
  {
    path: 'mtto-checklist-win-montaje6',
    loadComponent: () => import('./pages/mod/mtto/checklist/mtto-checklist-win-montaje6/mtto-checklist-win-montaje6.page').then(m => m.MttoChecklistWinMontaje6Page)
  },
  {
    path: 'listinspecable',
    loadComponent: () => import('./pages/mod/mtto/listinspecable/listinspecable.page').then(m => m.ListinspecablePage)
  },
  {
    path: 'mtto-list-recinado',
    loadComponent: () => import('./pages/mod/mtto/mtto-list-recinado/mtto-list-recinado.page').then(m => m.MttoListRecinadoPage)
  },
  {
    path: 'mtto-win-recinado',
    loadComponent: () => import('./pages/mod/mtto/mtto-win-recinado/mtto-win-recinado.page').then(m => m.MttoWinRecinadoPage)
  },
  {
    path: 'pop-up-equ-recinado',
    loadComponent: () => import('./pages/mod/mtto/pop-up-equ-recinado/pop-up-equ-recinado.page').then(m => m.PopUpEquRecinadoPage)
  },
  {
    path: 'mtto-recina-entrega-cable',
    loadComponent: () => import('./pages/mod/mtto/mtto-recina-entrega-cable/mtto-recina-entrega-cable.page').then(m => m.MttoRecinaEntregaCablePage)
  },
  {
    path: 'listaprincipal',
    loadComponent: () => import('./pages/mod/mtto/ot/listaprincipal/listaprincipal.page').then(m => m.ListaprincipalPage)
  },
  {
    path: 'winprincipal',
    loadComponent: () => import('./pages/mod/mtto/solse/winprincipal/winprincipal.page').then(m => m.WinprincipalPage)
  },
  {
    path: 'mtto-solse-popupservicios',
    loadComponent: () => import('./pages/mod/mtto/solse/mtto-solse-popupservicios/mtto-solse-popupservicios.page').then(m => m.MttoSolsePopupserviciosPage)
  },
  {
    path: 'pop-up-equipos',
    loadComponent: () => import('./pages/mod/prod/pop-up-equipos/pop-up-equipos.page').then(m => m.PopUpEquiposPage)
  },
  {
    path: 'pop-up-pt',
    loadComponent: () => import('./pages/mod/prod/pop-up-pt/pop-up-pt.page').then(m => m.PopUpPtPage)
  },
  {
    path: 'mtto-genera-solse',
    loadComponent: () => import('./pages/mod/mtto/solse/mtto-genera-solse/mtto-genera-solse.page').then(m => m.MttoGeneraSolsePage)
  },
  {
    path: 'mtto-ot-genera-no-programa',
    loadComponent: () => import('./pages/mod/mtto/ot/mtto-ot-genera-no-programa/mtto-ot-genera-no-programa.page').then(m => m.MttoOtGeneraNoProgramaPage)
  },
  {
    path: 'mtto-ot-pop-equipo',
    loadComponent: () => import('./pages/mod/mtto/ot/mtto-ot-pop-equipo/mtto-ot-pop-equipo.page').then(m => m.MttoOtPopEquipoPage)
  },
  {
    path: 'mtto-ot-pop-tecnico',
    loadComponent: () => import('./pages/mod/mtto/ot/mtto-ot-pop-tecnico/mtto-ot-pop-tecnico.page').then(m => m.MttoOtPopTecnicoPage)
  },
  {
    path: 'prod-list-acti-programada',
    loadComponent: () => import('./pages/mod/prod/prod-list-acti-programada/prod-list-acti-programada.page').then(m => m.ProdListActiProgramadaPage)
  },
  {
    path: 'prod-ate-serv-list-actividades',
    loadComponent: () => import('./pages/mod/prod/AtencionServicios/prod-ate-serv-list-actividades/prod-ate-serv-list-actividades.page').then(m => m.ProdAteServListActividadesPage)
  },
  {
    path: 'prod-ate-serv-asigna-estado',
    loadComponent: () => import('./pages/mod/prod/AtencionServicios/prod-ate-serv-asigna-estado/prod-ate-serv-asigna-estado.page').then(m => m.ProdAteServAsignaEstadoPage)
  },
  {
    path: 'addserviciostodet',
    loadComponent: () => import('./pages/mod/prod/AtencionServicios/addserviciostodet/addserviciostodet.page').then(m => m.AddserviciostodetPage)
  },
  {
    path: 'prod-ate-serv-pop-personal',
    loadComponent: () => import('./pages/mod/prod/AtencionServicios/prod-ate-serv-pop-personal/prod-ate-serv-pop-personal.page').then(m => m.ProdAteServPopPersonalPage)
  },
  {
    path: 'prod-ate-serv-pop-pieza',
    loadComponent: () => import('./pages/mod/prod/AtencionServicios/prod-ate-serv-pop-pieza/prod-ate-serv-pop-pieza.page').then(m => m.ProdAteServPopPiezaPage)
  },
  {
    path: 'prod-ate-serv-pop-clase',
    loadComponent: () => import('./pages/mod/prod/AtencionServicios/prod-ate-serv-pop-clase/prod-ate-serv-pop-clase.page').then(m => m.ProdAteServPopClasePage)
  },
  {
    path: 'prod-ate-serv-pop-of',
    loadComponent: () => import('./pages/mod/prod/AtencionServicios/prod-ate-serv-pop-of/prod-ate-serv-pop-of.page').then(m => m.ProdAteServPopOfPage)
  },
  {
    path: 'prod-ate-serv-pop-qr',
    loadComponent: () => import('./pages/mod/prod/AtencionServicios/prod-ate-serv-pop-qr/prod-ate-serv-pop-qr.page').then(m => m.ProdAteServPopQrPage)
  },
  {
    path: 'pop-up-servicios',
    loadComponent: () => import('./pages/mod/prod/AtencionServicios/pop-up-servicios/pop-up-servicios.page').then(m => m.PopUpServiciosPage)
  },
  {
    path: 'prod-ate-serv-inicia-actividad',
    loadComponent: () => import('./pages/mod/prod/AtencionServicios/prod-ate-serv-inicia-actividad/prod-ate-serv-inicia-actividad.page').then(m => m.ProdAteServIniciaActividadPage)
  },
  {
    path: 'prod-ate-serv-view-dejar-pieza-calidad',
    loadComponent: () => import('./pages/mod/prod/AtencionServicios/prod-ate-serv-view-dejar-pieza-calidad/prod-ate-serv-view-dejar-pieza-calidad.page').then(m => m.ProdAteServViewDejarPiezaCalidadPage)
  },
  {
    path: 'prod-ate-serv-reporte-falla',
    loadComponent: () => import('./pages/mod/prod/AtencionServicios/prod-ate-serv-reporte-falla/prod-ate-serv-reporte-falla.page').then(m => m.ProdAteServReporteFallaPage)
  },
  {
    path: 'prod-ate-serv-relevo',
    loadComponent: () => import('./pages/mod/prod/AtencionServicios/prod-ate-serv-relevo/prod-ate-serv-relevo.page').then(m => m.ProdAteServRelevoPage)
  },
  {
    path: 'prod-ate-serv-dejar-pieza-calidad',
    loadComponent: () => import('./pages/mod/prod/AtencionServicios/prod-ate-serv-dejar-pieza-calidad/prod-ate-serv-dejar-pieza-calidad.page').then(m => m.ProdAteServDejarPiezaCalidadPage)
  },
  // {
  //   path: 'alm-ing-list-recep-oc-page',
  //   loadComponent: () => import('./pages/mod/alm/ingreso/alm-ing-list-recep-oc-page/alm-ing-list-recep-oc-page.page').then( m => m.AlmIngListRecepOcPagePage)
  // },
  {
    path: 'alm-ing-list-recep-oc',
    loadComponent: () => import('./pages/mod/alm/ingreso/alm-ing-list-recep-oc/alm-ing-list-recep-oc.page').then(m => m.AlmIngListRecepOcPage)
  },
  {
    path: 'alm-ing-win-det-recep-oc',
    loadComponent: () => import('./pages/mod/alm/ingreso/alm-ing-win-det-recep-oc/alm-ing-win-det-recep-oc.page').then(m => m.AlmIngWinDetRecepOcPage)
  },
  {
    path: 'alm-ing-win-recep-oc',
    loadComponent: () => import('./pages/mod/alm/ingreso/alm-ing-win-recep-oc/alm-ing-win-recep-oc.page').then(m => m.AlmIngWinRecepOcPage)
  },
  {
    path: 'mtto-list-informe-tecnico',
    loadComponent: () => import('./pages/mod/mtto/informe_tecnico/mtto-list-informe-tecnico/mtto-list-informe-tecnico.page').then(m => m.MttoListInformeTecnicoPage)
  },
  {
    path: 'mtto-win-informe-tecnico',
    //loadComponent: () => import('./pages/mod/mtto/informe_tecnico/mtto-win-informe-tecnico/mtto-win-informe-tecnico.page').then( m => m.MttoWinInformeTecnicoPage)
    loadChildren: () => import('./pages/mod/mtto/informe_tecnico/mtto-win-informe-tecnico/tabs.routes').then((m) => m.routes),
    canActivate: [AuthGuardService], data: { loginRoute: '/login' }
  },
  {
    path: 'mtto-win-informe-tecnico1',
    loadComponent: () => import('./pages/mod/mtto/informe_tecnico/mtto-win-informe-tecnico1/mtto-win-informe-tecnico1.page').then(m => m.MttoWinInformeTecnico1Page)
  },
  {
    path: 'mtto-win-informe-tecnico2',
    loadComponent: () => import('./pages/mod/mtto/informe_tecnico/mtto-win-informe-tecnico2/mtto-win-informe-tecnico2.page').then(m => m.MttoWinInformeTecnico2Page)
  },
  {
    path: 'mtto-win-informe-tecnico3',
    loadComponent: () => import('./pages/mod/mtto/informe_tecnico/mtto-win-informe-tecnico3/mtto-win-informe-tecnico3.page').then(m => m.MttoWinInformeTecnico3Page)
  },
  {
    path: 'mtto-win-informe-tecnico4',
    loadComponent: () => import('./pages/mod/mtto/informe_tecnico/mtto-win-informe-tecnico4/mtto-win-informe-tecnico4.page').then(m => m.MttoWinInformeTecnico4Page)
  },
  {
    path: 'mtto-win-informe-tecnico5',
    loadComponent: () => import('./pages/mod/mtto/informe_tecnico/mtto-win-informe-tecnico5/mtto-win-informe-tecnico5.page').then(m => m.MttoWinInformeTecnico5Page)
  },
  {
    path: 'mtto-win-informe-tecnico6',
    loadComponent: () => import('./pages/mod/mtto/informe_tecnico/mtto-win-informe-tecnico6/mtto-win-informe-tecnico6.page').then(m => m.MttoWinInformeTecnico6Page)
  },
  {
    path: 'mtto-list-orden-trabajo',
    loadComponent: () => import('./pages/mod/mtto/otis/mtto-list-orden-trabajo/mtto-list-orden-trabajo.page').then(m => m.MttoListOrdenTrabajoPage)
  },
  {
    // path: 'mtto-win-orden-trabajo',
    // loadComponent: () => import('./pages/mod/mtto/otis/mtto-win-orden-trabajo/mtto-win-orden-trabajo.page').then( m => m.MttoWinOrdenTrabajoPage)
    path: 'mtto-win-orden-trabajo',
    //loadComponent: () => import('./pages/mod/mtto/informe_tecnico/mtto-win-informe-tecnico/mtto-win-informe-tecnico.page').then( m => m.MttoWinInformeTecnicoPage)
    loadChildren: () => import('./pages/mod/mtto/otis/mtto-win-orden-trabajo/tabs.routes').then((m) => m.routes),
    canActivate: [AuthGuardService], data: { loginRoute: '/login' }
  },
  {
    path: 'mtto-win-orden-trabajo1',
    loadComponent: () => import('./pages/mod/mtto/otis/mtto-win-orden-trabajo1/mtto-win-orden-trabajo1.page').then(m => m.MttoWinOrdenTrabajo1Page)
  },
  {
    path: 'mtto-win-orden-trabajo2',
    loadComponent: () => import('./pages/mod/mtto/otis/mtto-win-orden-trabajo2/mtto-win-orden-trabajo2.page').then(m => m.MttoWinOrdenTrabajo2Page)
  },
  {
    path: 'mtto-win-orden-trabajo3',
    loadComponent: () => import('./pages/mod/mtto/otis/mtto-win-orden-trabajo3/mtto-win-orden-trabajo3.page').then(m => m.MttoWinOrdenTrabajo3Page)
  },
  {
    path: 'mtto-win-orden-trabajo4',
    loadComponent: () => import('./pages/mod/mtto/otis/mtto-win-orden-trabajo4/mtto-win-orden-trabajo4.page').then(m => m.MttoWinOrdenTrabajo4Page)
  },
  // {
  //   path: 'mtto-win-orden-trabajo5',
  //  loadComponent: () => import('./pages/mod/mtto/otis/mtto-win-orden-trabajo5/mtto-win-orden-trabajo5.page').then( m => m.MttoWinOrdenTrabajo5Page)
  // }, 
  {
    path: 'mtto-otis-pop-up-equipo',
    loadComponent: () => import('./pages/mod/mtto/otis/mtto-otis-pop-up-equipo/mtto-otis-pop-up-equipo.page').then(m => m.MttoOtisPopUpEquipoPage)
  },
  {
    path: 'mtto-otis-pop-up-add-item',
    loadComponent: () => import('./pages/mod/mtto/otis/mtto-otis-pop-up-add-item/mtto-otis-pop-up-add-item.page').then(m => m.MttoOtisPopUpAddItemPage)
  },
  {
    path: 'mtto-otis-pop-up-add-part-list',
    loadComponent: () => import('./pages/mod/mtto/otis/mtto-otis-pop-up-add-part-list/mtto-otis-pop-up-add-part-list.page').then(m => m.MttoOtisPopUpAddPartListPage)
  },
  {
    path: 'prod-resumen-diario-horas',
    loadComponent: () => import('./pages/mod/prod/AtencionServicios/prod-resumen-diario-horas/prod-resumen-diario-horas.page').then(m => m.ProdResumenDiarioHorasPage)
  },
  {
    path: 'mtto-win-orden-trabajo5',
    loadComponent: () => import('./pages/mod/mtto/otis/mtto-win-orden-trabajo5/mtto-win-orden-trabajo5.page').then(m => m.MttoWinOrdenTrabajo5Page)
  },
  {
    path: 'pop-up-bomba',
    loadComponent: () => import('./pages/mod/mtto/otis/pop-up-bomba/pop-up-bomba.page').then(m => m.PopUpBombaPage)
  },
  {
    path: 'mtto-win-control-rebobinado',
    loadComponent: () => import('./pages/mod/mtto/otis/mtto-win-control-rebobinado/mtto-win-control-rebobinado.page').then(m => m.MttoWinControlRebobinadoPage)
  },
  {
    path: 'mtto-win-orden-trabajo6',
    loadComponent: () => import('./pages/mod/mtto/otis/mtto-win-orden-trabajo6/mtto-win-orden-trabajo6.page').then(m => m.MttoWinOrdenTrabajo6Page)
  },
  {
    path: 'mtto-informe-tablero',
    loadComponent: () => import('./pages/mod/mtto/informe_tablero/mtto-informe-tablero/mtto-informe-tablero.page').then(m => m.MttoInformeTableroPage)
  },
  {
    path: 'mtto-informe-tablero',
    loadChildren: () => import('./pages/mod/mtto/informe_tablero/mtto-informe-tablero/tabs.routes').then((m) => m.routes),
    canActivate: [AuthGuardService], data: { loginRoute: '/login' }
  },
  {
    path: 'mtto-win-informe-tablero1',
    loadComponent: () => import('./pages/mod/mtto/informe_tablero/mtto-win-informe-tablero1/mtto-win-informe-tablero1.page').then(m => m.MttoWinInformeTablero1Page)
  },
  {
    path: 'mtto-win-informe-tablero2',
    loadComponent: () => import('./pages/mod/mtto/informe_tablero/mtto-win-informe-tablero2/mtto-win-informe-tablero2.page').then(m => m.MttoWinInformeTablero2Page)
  },
  {
    path: 'mtto-win-informe-tablero3',
    loadComponent: () => import('./pages/mod/mtto/informe_tablero/mtto-win-informe-tablero3/mtto-win-informe-tablero3.page').then(m => m.MttoWinInformeTablero3Page)
  },
  {
    path: 'mtto-win-informe-tablero4',
    loadComponent: () => import('./pages/mod/mtto/informe_tablero/mtto-win-informe-tablero4/mtto-win-informe-tablero4.page').then(m => m.MttoWinInformeTablero4Page)
  },
  {
    path: 'mtto-list-informe-tablero',
    loadComponent: () => import('./pages/mod/mtto/informe_tablero/mtto-list-informe-tablero/mtto-list-informe-tablero.page').then(m => m.MttoListInformeTableroPage)
  },
  {
    path: 'mtto-win-informe-tablero5',
    loadComponent: () => import('./pages/mod/mtto/informe_tablero/mtto-win-informe-tablero5/mtto-win-informe-tablero5.page').then(m => m.MttoWinInformeTablero5Page)
  },
  {
    path: 'mtto-list-checklist-herra',
    loadComponent: () => import('./pages/mod/mtto/checklist_herra/mtto-list-checklist-herra/mtto-list-checklist-herra.page').then(m => m.MttoListChecklistHerraPage)
  },
  {
    path: 'mtto-win-checklist-herra1',
    loadComponent: () => import('./pages/mod/mtto/checklist_herra/mtto-win-checklist-herra1/mtto-win-checklist-herra1.page').then(m => m.MttoWinChecklistHerra1Page)
  },
  {
    path: 'mtto-win-checklist-herra',
    loadComponent: () => import('./pages/mod/mtto/checklist_herra/mtto-win-checklist-herra/mtto-win-checklist-herra.page').then(m => m.MttoWinChecklistHerraPage)
  },
  {
    path: 'pop-up-tec-checklisth',
    loadComponent: () => import('./pages/mod/mtto/checklist_herra/pop-up-tec-checklisth/pop-up-tec-checklisth.page').then(m => m.PopUpTecChecklisthPage)
  }, {
    path: 'pdf-viewer',
    loadComponent: () => import('./pages/pdf_viewer/pdf-viewer.page').then(m => m.PdfViewerPage)
  }, {
    path: 'pop-up-add-herra',
    loadComponent: () => import('./pages/mod/mtto/checklist_herra/pop-up-add-herra/pop-up-add-herra.page').then(m => m.PopUpAddHerraPage)
  }, 
  {
    path: 'pop-up-form-herra',
    loadComponent: () => import('./pages/mod/mtto/checklist_herra/pop-up-form-herra/pop-up-form-herra.page').then(m => m.PopUpFormHerraPage)
  },
  {
    path: 'pop-up-imagen-herra',
    loadComponent: () => import('./pages/mod/mtto/checklist_herra/pop-up-imagen-herra/pop-up-imagen-herra.page').then(m => m.PopUpImagenHerraPage)
  },
  {
    path: 'prod-list-acti-historico',
    loadComponent: () => import('./pages/mod/prod/prod-list-acti-historico/prod-list-acti-historico.page').then( m => m.ProdListActiHistoricoPage)
  },
  {
    path: 'motivo-pausa',
    loadComponent: () => import('./pages/mod/prod/prod-list-acti-historico/modals/motivo-pausa/motivo-pausa.page').then( m => m.MotivoPausaPage)
  },
  {
    path: 'rrhh-horas-extras',
    loadComponent: () => import('./pages/mod/rrhh/rrhh-horas-extras/rrhh-horas-extras.page').then( m => m.RrhhHorasExtrasPage)
  },
  {
    path: 'rrhh-win-horas-extras',
    loadComponent: () => import('./pages/mod/rrhh/rrhh-win-horas-extras/rrhh-win-horas-extras.page').then( m => m.RrhhWinHorasExtrasPage)
  },
  {
    path: 'rrhh-popup-tecnico',
    loadComponent: () => import('./pages/mod/rrhh/rrhh-popup-tecnico/rrhh-popup-tecnico.page').then( m => m.RrhhPopupTecnicoPage)
  },
  {
    path: 'rrhh-popup-servicios',
    loadComponent: () => import('./pages/mod/rrhh/rrhh-popup-servicios/rrhh-popup-servicios.page').then( m => m.RrhhPopupServiciosPage)
  },
  {
    path: 'rrhh-popup-actividad',
    loadComponent: () => import('./pages/mod/rrhh/rrhh-popup-actividad/rrhh-popup-actividad.page').then( m => m.RrhhPopupActividadPage)
  },
  {
    path: 'rrhh-popup-motivo',
    loadComponent: () => import('./pages/mod/rrhh/rrhh-popup-motivo/rrhh-popup-motivo.page').then( m => m.RrhhPopupMotivoPage)
  },
  {
    path: 'rrhh-popup-supervisor',
    loadComponent: () => import('./pages/mod/rrhh/rrhh-popup-supervisor/rrhh-popup-supervisor.page').then( m => m.RrhhPopupSupervisorPage)
  },
  {
    path: 'rrhh-popup-descripcion',
    loadComponent: () => import('./pages/mod/rrhh/rrhh-popup-descripcion/rrhh-popup-descripcion.page').then( m => m.RrhhPopupDescripcionPage)
  },
  {
    path: 'rrhh-popup-area',
    loadComponent: () => import('./pages/mod/rrhh/rrhh-popup-area/rrhh-popup-area.page').then( m => m.RrhhPopupAreaPage)
  },
  {
    path: 'rrhh-list-aprob-he',
    loadComponent: () => import('./pages/mod/rrhh/rrhh-list-aprob-he/rrhh-list-aprob-he.page').then( m => m.RrhhListAprobHePage)
  },
  {
    path: 'grid-entrega-bombas',
    loadComponent: () => import('./pages/mod/prod/checklist_entrega_bombas/grid-entrega-bombas/grid-entrega-bombas.page').then( m => m.GridEntregaBombasPage)
  },
  {
    path: 'win-entrega-bombas1',
    loadComponent: () => import('./pages/mod/prod/checklist_entrega_bombas/win-entrega-bombas1/win-entrega-bombas1.page').then( m => m.WinEntregaBombas1Page)
  },
  {
    path: 'pop-up-ot-protocolos',
    loadComponent: () => import('./pages/mod/prod/checklist_entrega_bombas/pop-up-ot-protocolos/pop-up-ot-protocolos.page').then( m => m.PopUpOtProtocolosPage)
  },
  {
    path: 'modal-horometro-inicio',
    loadComponent: () => import('./components/modals/modal-horometro-inicio/modal-horometro-inicio.page').then( m => m.ModalHorometroInicioPage)
  },
  {
    path: 'modal-horometro-fin',
    loadComponent: () => import('./components/modals/modal-horometro-fin/modal-horometro-fin.page').then( m => m.ModalHorometroFinPage)
  },
  {
    path: 'rrhh-horas-compensadas',
    loadComponent: () => import('./pages/mod/rrhh/rrhh-horas-compensadas/rrhh-horas-compensadas.page').then( m => m.RrhhHorasCompensadasPage)
  },
  {
    path: 'rrhh-list-horas-compensadas',
    loadComponent: () => import('./pages/mod/rrhh/rrhh-list-horas-compensadas/rrhh-list-horas-compensadas.page').then( m => m.RrhhListHorasCompensadasPage)
  }

  
  
];