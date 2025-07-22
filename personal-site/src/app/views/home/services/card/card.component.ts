import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';

import { TranslatePipe } from '../../../../pipes/translate.pipe';

@Component({
    standalone: true,
    selector: 'app-card',
    imports: [TranslatePipe, RouterLink],
    templateUrl: './card.component.html',
    styleUrl: './card.component.scss'
})
export class CardComponent {
    color = input.required<string>();
    title = input.required<string>();
    summary = input.required<string>();
    link = input.required<string>();
}
