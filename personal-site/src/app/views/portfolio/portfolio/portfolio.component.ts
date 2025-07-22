import { Component } from '@angular/core';
import { Content } from '../../../services/language.service';
import { TranslatePipe } from '../../../pipes/translate.pipe';
import { CardComponent } from './card/card.component';

interface Card {
    color: string
    title: Content
    content: Content
    link: string
}

@Component({
    selector: 'app-portfolio',
    imports: [TranslatePipe, CardComponent],
    templateUrl: './portfolio.component.html',
    styleUrl: './portfolio.component.scss'
})
export class PortfolioComponent {
    title: Content = {
        en: 'My Portfolio',
        pt: 'Meu Portifólio'
    }

    summary: Content = {
        en: 'Explore a diverse range of my projects, categorized to showcase my expertise in various development areas. '
            + 'Each section provides a glimpse into the solutions I\'ve crafted.',
        pt: ''
    }

    cta: Content = {
        en: 'Ready to Start Your Project? Contact Me!',
        pt: 'Pronto para Começar Seu Projeto? Me Contate!'
    }

    cards: Card[] = [
        {
            color: 'purple',
            title: {
                en: 'Backend Development',
                pt: 'Desenvolvimento Backend'
            },
            content: {
                en: 'Dive into projects focused on building robust, scalable, and secure server-side applications and '
                    + 'APIs using various programming languages and frameworks.',
                pt: ''
            },
            link: '/portfolio/backend'
        },
        {
            color: 'orange',
            title: {
                en: 'Robotic Process Automation',
                pt: 'Automação Robótica de Processos'
            },
            content: {
                en: 'Discover solutions that automate repetitive tasks, improve efficiency, and streamline workflows '
                    + 'across various business processes.',
                pt: ''
            },
            link: '/portfolio/rpa'
        },
        {
            color: 'blue',
            title: {
                en: 'Open Source Contributions',
                pt: 'Contribuições Open Source'
            },
            content: {
                en: 'Explore my contributions to the open-source community, showcasing collaborative work and '
                    + 'problem-solving in public repositories.',
                pt: ''
            },
            link: '/portfolio/oss'
        },
        {
            color: 'green',
            title: {
                en: 'Full Stack Development',
                pt: 'Desenvolvimento Full Stack'
            },
            content: {
                en: 'See projects where I\'ve handled both frontend and backend development, delivering complete, end-to-end web applications.',
                pt: ''
            },
            link: 'portfolio/fullstack'
        },
        {
            color: 'red',
            title: {
                en: 'Data Science & Engineering',
                pt: 'Ciência e Engenharia de Dados'
            },
            content: {
                en: 'Projects involving data analysis, machine learning models, data pipeline construction, and insightful data visualization.',
                pt: ''
            },
            link: '/portfolio/data'
        },
        {
            color: 'yellow',
            title: {
                en: 'Other Projects',
                pt: 'Outros Projetos'
            },
            content: {
                en: 'A collection of miscellaneous projects and experiments that showcase diverse skills and creative problem-solving.',
                pt: ''
            },
            link: '/portfolio/other'
        }
    ]
}
