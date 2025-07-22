import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';

import { TranslatePipe } from '../../../pipes/translate.pipe';

@Component({
    standalone: true,
    selector: 'app-card',
    imports: [TranslatePipe, RouterLink],
    templateUrl: './card.component.html',
    styleUrl: './card.component.scss'
})
export class CardComponent {
    id = input.required<string>();
    title = input.required<string>();
    content = input.required<string>();
    color = input.required<string>();
}
