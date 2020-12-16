import { Component } from '@angular/core';
import {
    animate,
    state,
    style,
    transition,
    trigger
} from '@angular/animations';

@Component({
    selector: 'skill-slider',
    animations: [
        trigger('slideOver', [
            state('closed', style({ width: '0%', height: '*' })),
            state('open', style({ width: '100%', height: '*' })),
            transition('void => *', [animate(0)]),
            transition('* => *', [animate('150ms 40ms ease')])
        ])
    ],
    template: `
        <div (mouseenter)="toggle()" (mouseleave)="toggle()">
            <div class="skill-image" [@slideOver]="open ? 'open' : 'closed'">
                <ng-content select="[skill-image]"></ng-content>
            </div>
            <div class="skill-info" [@slideOver]="open ? 'closed' : 'open'">
                <ng-content select="[skill-info]"></ng-content>
            </div>
        </div>
    `
})
export class SkillSliderComponent {
    open: boolean = true;

    toggle() {
        this.open = !this.open;
    }
}
