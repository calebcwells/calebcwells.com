import { Component } from '@angular/core';
import { pulse } from '../animations/pulse.animation';

@Component({
    selector: 'data-wells-nav',
    templateUrl: './navigation.component.html',
    animations: [pulse]
})
export class NavigationComponent {
    state = 'inactive';
    isCollapsed = true;

    toggle(): void {
        this.state = this.state === 'inactive' ? 'active' : 'inactive';
    }
}
