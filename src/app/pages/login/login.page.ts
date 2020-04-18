import { Component, OnInit } from '@angular/core';
import { LoadingController, AlertController } from '@ionic/angular';
import { Router } from "@angular/router";


@Component({
    selector: 'app-login',
    templateUrl: './login.page.html',
    styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

    usuario: string = '';
    password: string = '';

    constructor(private loadingCtrl: LoadingController, private alertCtrl: AlertController, private router: Router) { }

    ngOnInit() {
    }

    async ingresar(){

        const loading = await this.loadingCtrl.create({
            message: 'Estableciendo conexión con el servidor..'
        });
  
        await loading.present();
  
        // this._us.login(this.usuario, this.password)
        //   .subscribe(()=>{
            
        //     if (this._us.usuario_activo()) {
        //         this.navCtrl.push("ProductsPage");
        //         loading.dismiss();
        //     } else {
        //         loading.dismiss();
        //         this.limpiar();
        //     }
  
        //   })
      }
  
      limpiar(){
        this.password = "";
      }

      

}
