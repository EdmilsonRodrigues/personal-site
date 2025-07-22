import { Component } from '@angular/core';
import { Content } from '../../../services/language.service';
import { TranslatePipe } from '../../../pipes/translate.pipe';

@Component({
    standalone: true,
    selector: 'app-hero',
    imports: [TranslatePipe],
    templateUrl: './hero.component.html',
    styleUrl: './hero.component.scss'
})
export class HeroComponent {
    intro: Content = {
        'en': 'Hi there, I\'m',
        'pt': 'Bem-vindo! Me chamo',
    }
    headline: Content = {
        'en': 'Bringing <span class="font-bold">Creative Solutions</span> to life through code since 2024.',
        'pt': 'Trazendo <span class="font-bold">Soluções Criativas</span> à vida através de código desde 2024.'
    }

    creationsCall: Content = {
        'en': 'See My Creations',
        'pt': 'Veja minhas criações'
    }

    contactCall: Content = {
        'en': 'Let\'s Chat!',
        'pt': 'Vamos conversar!'
    }

}
