import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-home',
    templateUrl: './home.page.html',
    styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

    slideOpts = {
        initialSlide: 0,
        speed: 300
      };

    constructor(private router: Router) { }

    ngOnInit() {
    }

    saltar_intro() {
        this.router.navigate(['/welcome']);
    }

    navigation_welcome() {
        this.router.navigate(['/welcome']);
    }

}
