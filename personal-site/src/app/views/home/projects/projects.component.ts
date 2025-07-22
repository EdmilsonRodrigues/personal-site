import { Component } from '@angular/core';
import { CardComponent } from './card/card.component';
import { Content } from '../../../services/language.service';
import { TranslatePipe } from '../../../pipes/translate.pipe';

interface Card {
    color: string
    title: Content
    summary: Content
    link: string
}

@Component({
    standalone: true,
    selector: 'app-home-projects',
    imports: [CardComponent, TranslatePipe],
    templateUrl: './projects.component.html',
    styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
    title: Content = {
        'en': 'My Latest Adventures',
        'pt': 'Minhas Últimas Empreitadas',
    }

    viewAll: Content = {
        'en': 'View All Projects',
        'pt': 'Ver Todos os Projetos'
    }

    cards: Card[] = [
        {
            color: 'orange',
            title: {
                'en': 'Supermarket Inventory Manager',
                'pt': 'Gerenciador de Estoque de Supermercado',
            },
            summary: {
                'en': 'Developed application to manage a local supermarket inventory that integrates with a bar code reader.',
                'pt': 'Desenvolvi aplicação de gerenciamento de estoque para supermercado local integrando'
                    + ' com leitor de código de barras.',
            },
            link: '/portfolio/supermarket-inventory-manager'
        },
        {
            color: 'yellow',
            title: {
                'en': 'Dental Clinic Inventory Manager',
                'pt': 'Gerenciador de Estoque de Clínica Dental'
            },
            summary: {
                'en': 'Developed backend of inventory manager application for local dental clinic.',
                'pt': 'Desenvolvi backend de aplicação gerenciadora de inventário para clínica dentária local.'
            },
            link: '/portfolio/dental-clinic-inventory-manager'
        },
        {
            color: 'purple',
            title: {
                'en': 'Public Tender Tracker',
                'pt': 'Acompanhador de Licitações',
            },
            summary: {
                'en': 'Study case of micro SaaS for tracking brazilian public examinations for acessing '
                    + 'opening of government contracts.',
                'pt': 'Caso de estudo da construção de micro SaaS de acompanhamento da abertura de licitações.',
            },
            link: '/portfolio/public-tender-tracker'
        },
        {
            color: 'red',
            title: {
                'en': 'PyIncus: Python Library',
                'pt': 'PyIncus: Biblioteca Python'
            },
            summary: {
                'en': 'Python SDK for interacting with Incus for managemente of Linux Containers and Virtual Machines.',
                'pt': 'SDK Python para interagir com Incus para gerenciamento de Containers Linux e Máquinas Virtuais.'
            },
            link: '/portfolio/pyincus'
        },
        {
            color: 'green',
            title: {
                'en': 'LXC Desktop',
                'pt': 'LXC Desktop'
            },
            summary: {
                'en': 'Desktop application with graphical interface for managing Linux Containers and VMs through LXD and Incus.',
                'pt': 'Aplicação Desktop com interface gráfica para gerenciamento de Linux Containers '
                    + 'e Máquinas Virtuais usando LXD e Incus.'
            },
            link: '/portfolio/lxc-desktop'
        },
        {
            color: 'blue',
            title: {
                'en': 'Lilo Finance Manager',
                'pt': 'Gestor de Finanças Lilo'
            },
            summary: {
                'en': 'Study case of personal finance manager using microservices and multiple languages, frameworks and databases.',
                'pt': 'Estudo de caso de gerenciador de finanças pessoais usando microsserviços e '
                    + 'múltiplas linguagens, frameworks e bancos de dados.',
            },
            link: '/portfolio/lilo-finance-manager'
        }
    ]
}
