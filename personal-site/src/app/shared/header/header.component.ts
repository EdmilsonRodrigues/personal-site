import { Component } from '@angular/core';
import { Content, LanguageService } from '../../services/language.service';
import { TranslatePipe } from '../../pipes/translate.pipe';
import { FlagComponent } from './flags/flags.component';

interface Link {
    link: string;
    name: Content;
}


@Component({
    standalone: true,
    selector: 'app-header',
    imports: [TranslatePipe, FlagComponent],
    templateUrl: './header.component.html',
    styleUrl: './header.component.scss'
})
export class HeaderComponent {
    availableLanguages = ["en", "pt"];
    subTitle: Content = {
        'pt': 'Desenvolvedor de Software | Freelancer | Open Sourcer',
        'en': 'Software Engineer | Freelancer | Open Sourcer'
    };

    links: Link[] = [
        {
            link: '/',
            name: { 'en': 'Home', 'pt': 'Home' },
        },
        {
            link: '/about',
            name: { 'en': 'About', 'pt': 'Sobre' },
        },
        {
            link: '/portfolio',
            name: { 'en': 'Portfolio', 'pt': 'Portifólio' },
        },
        {
            link: '/services',
            name: { 'en': 'Services', 'pt': 'Serviços' }
        }
    ];

    flags: Content = {
        'en': 'en',
        'pt': 'br'
    };

    languages: Content = {
        'en': 'English',
        'pt': 'Português'
    };

    constructor(private languageService: LanguageService) { }

    updateLanguage(language: string) {
        this.languageService.setLanguage(language);
    }

}
