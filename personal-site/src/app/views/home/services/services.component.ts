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
    selector: 'app-home-services',
    imports: [CardComponent, TranslatePipe],
    templateUrl: './services.component.html',
    styleUrl: './services.component.scss'
})
export class ServicesComponent {
    title: Content = {
        'en': 'Services Offered',
        'pt': 'Serviços Oferecidos',
    }

    viewMore: Content = {
        'en': 'View More about Services',
        'pt': 'Ver Mais sobre os Serviços'
    }

    cards: Card[] = [
        {
            color: 'blue',
            title: {
                'en': 'Enterprise Management System',
                'pt': 'Sistemas de Gerencimento Empresarial',
            },
            summary: {
                'en': 'Development of inventory management applications, report generators, ERPs, document archiving systems,'
                    + ' etc, either server-based or local desktop applications. Anything to make the life in your company easier.',
                'pt': 'Desenvolvimento de aplicações de gerenciamento de estoque, geradores de relatórios, ERPs, sistemas de '
                    + 'arquivamento de documentos, etc, seja hospedado em servidor ou aplicações desktop locais.'
                    + 'Tudo para fazer a vida na sua companhia mais simples.',
            },
            link: '/services#enterprise-management-system'
        },
        {
            color: 'yellow',
            title: {
                'en': 'Robotic Process Automation',
                'pt': 'Automação Robótica de Processos'
            },
            summary: {
                'en': 'Is there some repetitive process in your workflow that is slowing you down? No worries! From email automation '
                    + 'and spreadsheet consolidation, to web automations, or scraping. If you want to accelerate your process, '
                    + 'this service is for you!',
                'pt': 'Há algum processo repetitivo no seu fluxo de trabalho que está atrasando seu time? Sem problemas! De '
                    + 'automações de email e consolidações de planilhas, a automações web e raspagem de dados. Se você '
                    + 'quer acelerar seus processos, então esse serviço é para você!'
            },
            link: '/services#robotic-process-automation'
        },
        {
            color: 'purple',
            title: {
                'en': 'Websites and Web Applications',
                'pt': 'Websites e Aplicações Web',
            },
            summary: {
                'en': 'From E-Commerce and Institutional Websites, to the MVP for your Software as a Service Startup, if '
                    + 'you have the need for a complete website, or have a vision that you want to turn into reality, then'
                    + ' this is the service for you.',
                'pt': 'De plataformas de E-Commerce e Sites Institucionais, ao MVP da sua Startup de Software as a Service, '
                    + 'se você tem a necessidade de um website completo, ou tem uma visão e quer vê-la virar realidade, então'
                    + 'esse é o serviço para você.',
            },
            link: '/services#websites-and-web-applications'
        },
        {
            color: 'red',
            title: {
                'en': 'CI / CD Pipelines',
                'pt': 'CI / CD Pipelines'
            },
            summary: {
                'en': 'Does your process still uses manual setup to deploy your application? Just thinking about those huge YAML '
                    + 'needed to have your process automated already makes you fell tired? Worry no more! Let\'s create your '
                    + 'Continuous Integration and Continuous Deployment Pipelines so that you only care about the coding, and '
                    + 'let the Infrastructure as Code tools in your CI/CD server handle your integration and builds!',
                'pt': 'Seu processo ainda usa setup manual para o deploy da sua aplicação? Só de pensar naqueles enormes YAML '
                    + 'necessários para ter seu processo automatizado já te faz sentir cansado? Seus problemas acabaram! Vamos '
                    + 'construir suas Pipelines de Integração e Entrega Contínuas para que você possa se preocupar somente com o '
                    + 'código e deixar as ferramentas de Infraestrutura como código no seu servidor de CI/CD cuidarem das suas '
                    + 'integrações e builds.'
            },
            link: '/services#ci-cd-pipelines'
        },
        {
            color: 'orange',
            title: {
                'en': 'Cloud Dimensioning and Provisioning',
                'pt': 'Dimensionamento e Provisionamento de Cloud'
            },
            summary: {
                'en': 'Are you building your first application and want to deploy it in the cloud? Do you have an application '
                    + 'running, but the infrastructure costs are being a bottleneck to your operation? Let me dimension your '
                    + 'cloud environment so you can deliver the best quality for your customers, paying only for what you need!',
                'pt': 'Você está construindo sua primeira aplicação e deseja realizar o deploy dela na nuvem? Você tem uma '
                    + 'aplicação rodando, mas seus custos de infraestrutura estão virando um gargalo para sua operação? Me deixe '
                    + 'dimensionar seu ambiente Cloud para que você possa entregar a melhor qualidade para seus clientes, pagando '
                    + 'somente pelo que você realmente precisa!'
            },
            link: '/services#cloud-dimensioning-and-provisioning'
        },
        {
            color: 'green',
            title: {
                'en': 'Landing Page',
                'pt': 'Landing Page'
            },
            summary: {
                'en': 'Do you want a simple and quick web page where the customers can see about your product, or service '
                    + 'and don\'t require all the added complexity of a full web application? This service is made for you, '
                    + 'where I\'ll build for you a responsive landing page with your visual idendity, perfect for atracting '
                    + 'customers.',
                'pt': 'Você quer uma página web simples e rápida onde os cliente podem ver sobre seu produto ou serviço e não '
                    + 'precisa de toda a complexidade de uma aplicação web completa? Esse serviço então foi feito para você, onde '
                    + 'irei construir uma landing page responsiva com a sua identidade visual, perfeita para atrair clientes.',
            },
            link: '/services#landing-page'
        }
    ]
}
