import { Component, input } from '@angular/core';

@Component({
    standalone: true,
    selector: 'app-card',
    imports: [],
    templateUrl: './card.component.html',
    styleUrl: './card.component.scss'
})
export class CardComponent {
    color = input.required<string>()
    title = input.required<string>()
    content = input.required<string>()
}
