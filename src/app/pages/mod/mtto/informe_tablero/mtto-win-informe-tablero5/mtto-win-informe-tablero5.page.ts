import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { GlovalProvider } from 'src/app/interfaces/mtto/GlobalVal';
import { FormsModule,UntypedFormGroup,FormGroup,UntypedFormBuilder,NgForm,ReactiveFormsModule} from '@angular/forms';
import { MttoInformeTecnicoService } from 'src/app/api/mtto/mtto-informe-tecnico-service';
import { MttoOrdentrabajoService } from 'src/app/api/mtto/mtto-ordentrabajo.service';
import {
  NavController,
  AlertController,
  NavParams,
  LoadingController,
  ModalController,
} from '@ionic/angular';
@Component({
  selector: 'app-mtto-win-informe-tablero5',
  templateUrl: './mtto-win-informe-tablero5.page.html',
  styleUrls: ['./mtto-win-informe-tablero5.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule,ReactiveFormsModule]
})
export class MttoWinInformeTablero5Page implements OnInit {
  FormCheckListPaso5: UntypedFormGroup;
  pintadoTablero: boolean = false;
  monymant: boolean = false;
  pruebygen: boolean = false;
  arenado: boolean = false;
  rep: boolean = false;
  cal: boolean = false;
  EditDataRest: any;
  checklist_paso5_apli_ck: boolean = false;
  tog1: any;
  tog2: any;
  tog3: any;
  tog4: any;
  tog5: any;
  tog6: any;
  corre_inf_cab: any;
  constructor(
    public formBuilder: UntypedFormBuilder,
    private alertController: AlertController,
    private loadingController: LoadingController,
    private ApiService1: MttoInformeTecnicoService,
    private ApiService: MttoOrdentrabajoService,
    public globalVal: GlovalProvider,
    ) { 
      this.FormCheckListPaso5 = this.formBuilder.group({
        pintadoTablero: [''],
        monymant: [''],
        pruebygen: [''],
        arenado: [''],
        rep: [''],
        cal: [''],
        corre_inf_cab: ['']
  })
  }

  ngOnInit() {
  }
  
  savebutton1() {
        if (this.FormCheckListPaso5) {
          this.FormCheckListPaso5.controls['corre_inf_cab'].setValue(
            this.globalVal.corre_inf_cab
          );
          this.ApiService1.GuardarinfPaso5(this.FormCheckListPaso5.value);
          console.log('aqui se vera si pasa', this.FormCheckListPaso5.value);
        } else {
          console.error('FormCheckListPaso5 is undefined');
        }
  }
  ionViewWillEnter() {
    this.checklist_paso5_apli_ck =
    this.globalVal.checklist_paso1_apli == '0' ? true : false;
    this.FLoadForms();
    
    let event: any;
    event = {
      detail: { checked: this.checklist_paso5_apli_ck, jc: 0 },
    };
  }
  FLoadForms() {
    const loading = this.loadingController
      .create({
        message: 'Cargando lista....',
        translucent: true, //,
      })
      .then((loading) => {
        loading.present();
       
        this.ApiService.Formtoggtab1(this.globalVal.corre_inf_cab)
          .then((rest) => {
            console.log(this.globalVal.corre_inf_cab);
            this.EditDataRest = rest['form'];
            console.log('hrlppp',this.EditDataRest[0].togg1);
            try{
              this.FormCheckListPaso5.setValue({ 
               corre_inf_cab: this.globalVal.corre_inf_cab,
               pintadoTablero: this.EditDataRest[0].togg1,
               monymant: this.EditDataRest[0].togg2,
               pruebygen: this.EditDataRest[0].togg3,
               arenado: this.EditDataRest[0].togg4,
               rep: this.EditDataRest[0].togg5,
               cal: this.EditDataRest[0].togg6
              });
           }catch (error) {
             console.log('error:::>', error);
           }
          })
          .finally(() => {
            this.loadingController.dismiss();
          });
          
      });
      
    }
}
