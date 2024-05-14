import { Injectable } from '@angular/core';
Injectable()
export const ApiProxi = {
    UrlProxy:"https://api.codetabs.com/v1/proxy/?quest="///https://thingproxy.freeboard.io/fetch/https://192.168.100.249/
}

export const ApiBackDomains = {
    //urlApiProd: string = 'http://192.168.100.141/erpgeo_hidro//aw_modulos/prod/CApiValesServicios.php';///local
    //UrlProxy:"https://thingproxy.freeboard.io/fetch/",
    UrlDomainClon:ApiProxi.UrlProxy+"https://clon.geohidraulica.com.pe/",
    UrlDomainProd:ApiProxi.UrlProxy+"http://fuxion.geohidraulica.com.pe/",
    //UrlDomainLocal:"http://fuxion.geohidraulica.com.pe/",///ApiProxi.UrlProxy+
    UrlDomainLocal:"__"///http://192.168.3.84/erpgeo_hidro
    //UrlDomainLocal:"http://192.168.0.136/erpgeo_hidro/"///  : 192.168.0.136,  http://172.20.10.2  ***192.168.2.7
    //UrlDomainLocal:ApiProxi.UrlProxy+"http://clon.geohidraulica.com.pe/", ///100.249----
    //UrlDomainLocal:"http://clon.geohidraulica.com.pe/", ///100.249----
    //UrlDomainLocal:"http://fuxion.geohidraulica.com.pe/",///ApiProxi.UrlProxy+
    //UrlDomainLocal:"http://192.168.2.222/"/////38.43.140.205
    // /////////////////urls
    // public UrlPhpProdAteServ :string=this.UrlDomainLocal+"aw_modulos/prod/CApiValesServicios.php";
}
/*

formulario reporte de falla no regresa a la ventana principal
el tecnico debe aparecer por default
*/
