import { Component } from '@angular/core';
import { TranslatePipe } from '../../pipes/translate.pipe';
import { Content } from '../../services/language.service';

@Component({
    selector: 'app-page-not-found',
    imports: [TranslatePipe],
    templateUrl: './page-not-found.component.html',
    styleUrl: './page-not-found.component.scss'
})
export class PageNotFoundComponent {
    title: Content = { 'en': 'Page Not Found', 'pt': 'Página Não Encontrada' }
    text: Content = {
        'en': 'Oops! It looks like the page you\'re looking for doesn\'t exist. It might have been moved or deleted.',
        'pt': 'Opa! Parece que a página que estava buscando não existe. Ela pode ter sido movida ou deletada.'
    }
    goBack: Content = { 'en': 'Go Back Home', 'pt': 'Voltar para aba principal' }
}

