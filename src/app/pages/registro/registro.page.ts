import { Component, OnInit } from '@angular/core';
import { LoadingController, AlertController } from "@ionic/angular";
import { Router } from "@angular/router";

@Component({
    selector: 'app-registro',
    templateUrl: './registro.page.html',
    styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

    nombre: string;
	email: string;
	password: string;

    constructor(private loadingCtrl: LoadingController, private alertCtrl: AlertController, private router: Router) { }

    ngOnInit() {
    }

    async registrar() {
		let loading = await this.loadingCtrl.create({
			message : "Estableciendo conexión con el servidor.."
		});

		await loading.present();

		// this._us
		// 	.register(this.nombre, this.email, this.password)
		// 	.subscribe(data => {
		// 		console.log(data);
		// 		loading.dismiss();
		// 		this.navCtrl.pop();
		// 	});
	}

	cancelar() {
		this.router.navigate(['/welcome']);
	}

}
