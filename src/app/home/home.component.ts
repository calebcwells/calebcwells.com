import { Component } from '@angular/core';
import { pulse } from '../animations/pulse.animation';

@Component({
    selector: 'data-wells-home',
    templateUrl: './home.component.html',
    animations: [pulse]
})
export class HomeComponent {
    currentYear: string;

    constructor() {
        this.currentYear = new Date().getFullYear().toString();
    }
}
