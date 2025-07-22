import { Component } from '@angular/core';
import { Content } from '../../../services/language.service';
import { TranslatePipe } from '../../../pipes/translate.pipe';
import { CardComponent } from './card/card.component';

interface Card {
    color: string
    title: Content
    content: Content
}

@Component({
    standalone: true,
    selector: 'app-home-skills',
    imports: [TranslatePipe, CardComponent],
    templateUrl: './skills.component.html',
    styleUrl: './skills.component.scss'
})
export class SkillsComponent {
    title: Content = {
        'en': 'My Toolkit',
        'pt': 'Minhas ferramentas'
    }

    cards: Card[] = [
        {
            color: 'blue',
            title: {
                'en': 'Backend Languages',
                'pt': 'Linguagens Backend',
            },
            content: {
                'en': 'Crafting powerful and efficient backend systems with Python, Go, Elixir,'
                    + ' Java, and Node.js. Specializing in scalable APIs, RPA, and SaaS Startups.',
                'pt': 'Criando sistemas backend poderosos e eficientes com Python, Go, Elixir, '
                    + 'Java, e Node.js. Especializado em APIs escaláveis, RPA e Startups de SaaS.'
            },
        },
        {
            color: 'purple',
            title: {
                'en': 'Cloud Management',
                'pt': 'Gerenciamento de Clouds'
            },
            content: {
                'en': 'Experience with public clouds (AWS, GCP, OCI) to deploy, and manage '
                    + 'robust infrastructure. Orchestrating Containers with Kubernetes. '
                    + 'Messaging with Apache Kafka and Observability with Open Telemetry.',
                'pt': 'Experiência com clouds públicas (AWS, GCP, OCI) para lançar e gerenciar '
                    + 'infraestrutura robusta. Orquestrando containers com Kubernetes. '
                    + 'Mensageria com Apache Kafka e Observabilidade com Open Telemetry.'
            },
        },
        {
            color: 'red',
            title: {
                'en': 'System Administration',
                'pt': 'Admnistração de Sistemas'
            },
            content: {
                'en': 'Deep experience in Linux environments (Ubuntu, RHEL) and virtualization '
                    + '(LXC, Vagrant, Multipass). Keeping your systems running smoothly and securely.',
                'pt': 'Profunda experiência em ambientes Linux (Ubuntu, RHEL), e virtualização '
                    + '(LXC, Vagrant, Multipass). Mantendo seus sistemas rodando com segurança e precisão.'
            },
        },
        {
            color: 'green',
            title: {
                'en': 'Data Tools',
                'pt': 'Ferramentas de Dados',
            },
            content: {
                'en': 'Modeling data with PostgreSQL, MongoDB, MariaDB, Redis, and more. '
                    + 'ETL processing, and data analysis this Python, Pandas and SciKit Learn.',
                'pt': 'Modelando dados com PostgreSQL, MongoDB, MariaDB, Redis, e mais. '
                    + 'Processamento de ETL, e análise de dados com Python, Pandas e SciKit Learn.'
            },
        },
        {
            color: 'yellow',
            title: {
                'en': 'Frontend Frameworks',
                'pt': 'Frameworks Frontend'
            },
            content: {
                'en': 'Designing captivating user experiences with Angular and React.'
                    + 'Making sure your users have a smooth and responsive experience.',
                'pt': 'Criando experiências de usuários cativantes com Angular e React.'
                    + 'Garantindo que seus usuários tenham uma experiência lisa e responsiva'
            },
        },
        {
            color: 'orange',
            title: {
                'en': 'Agile Methodologies',
                'pt': 'Metodologias ágeis'
            },
            content: {
                'en': 'Running projects using agile methodologies such as Kanban and XP. '
                    + 'Designing applications with DDD, TDD, and BDD. Delivering quality software '
                    + 'through colaborative and iterative methodologies.',
                'pt': 'Realizando projetos utilizando metodologias ágeis como Kanban e XP. '
                    + 'Desenhando aplicações com DDD, TDD, e BDD. Entregando software de qualidade através '
                    + 'de metodologias colaborativas e iterativas.'
            },
        },
    ]

}
