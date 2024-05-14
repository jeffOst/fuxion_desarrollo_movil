//import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule, HttpHeaders } from "@angular/common/http";
import { Injectable, ɵConsole } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
//import { ApiImage, MttoRecinadoCables } from "../interfaces/mttoinspcables";
import { InforTablero } from "src/app/interfaces/mtto/mtt-informe-tablero";
///import { Uid } from '@ionic-native/uid/ngx';
//import { Device } from '@ionic-native/device/ngx';
import { __await } from 'tslib';
import { Storage } from "@ionic/storage";

import { Plugins } from '@capacitor/core';
import { Listservipend, ItemsSelected } from "src/app/interfaces/prod/listservipend";
import { ApiBackDomains } from "src/app/interfaces/ApiConections";