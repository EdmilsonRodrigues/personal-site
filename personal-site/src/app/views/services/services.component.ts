import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

import { Content } from '../../services/language.service';
import { TranslatePipe } from '../../pipes/translate.pipe';
import { CardComponent } from './card/card.component';

interface Card {
    id: string
    color: string
    title: Content
    content: Content
}

@Component({
    standalone: true,
    selector: 'app-services',
    imports: [TranslatePipe, CardComponent, RouterLink],
    templateUrl: './services.component.html',
    styleUrl: './services.component.scss'
})
export class ServicesComponent {
    title: Content = {
        'en': 'My Services',
        'pt': 'Meus Serviços'
    }

    summary: Content = {
        'en': 'I offer a range of specialized services designed to help you or your businesses thrive in the digital '
            + 'landscape. From automating complex processes to building robust web solutions, my goal is to deliver '
            + 'innovative and efficient results that drive your success.',
        'pt': 'Eu ofereço uma série de serviços especializados desenhados para ajudar você ou o seu negócio a serem '
            + 'bem sucedidos no cenário digital. Da automatização de processos complexos à construção de soluções web '
            + 'robustas, meu objetivo é entregar resultados inovadores e eficientes para te levar ao sucesso!'
    }

    cards: Card[] = [
        {
            id: 'enterprise-management-system',
            color: 'blue',
            title: {
                'en': 'Enterprise Management Systems',
                'pt': ''
            },
            content: {
                en: 'Streamline your business operations with custom-built Enterprise Management Systems. I specialize in developing intuitive and powerful applications designed to simplify your daily workflows, whether it\'s optimizing inventory management, generating insightful reports, or implementing comprehensive Enterprise Resource Planning (ERP) solutions. From secure document archiving systems to bespoke tools that automate complex administrative tasks, my focus is on creating tailored software that makes your company\'s life significantly easier. I build both robust server-based platforms and efficient local desktop applications, ensuring seamless integration with your existing infrastructure. My approach involves a deep dive into your current processes to identify bottlenecks and opportunities for automation, ensuring the developed system perfectly aligns with your operational needs and strategic goals. I leverage modern frameworks and secure coding practices to deliver solutions that are not only performant but also highly scalable and maintainable for the long term. Let\'s transform your operational challenges into opportunities for growth and efficiency, giving you more time to focus on what truly matters: your core business objectives and innovation. I provide end-to-end development, from initial requirements gathering and system design to deployment, testing, and ongoing support, ensuring a smooth transition and maximum return on your investment.',
                pt: ''
            }
        },
        {
            id: 'robotic-process-automation',
            color: 'yellow',
            title: {
                'en': 'Robotic Process Automation (RPA)',
                'pt': 'Automação Robótica de Processos (RPA)'
            },
            content: {
                'en': 'Unlock unparalleled efficiency by automating the repetitive, time-consuming tasks that hinder your productivity. My Robotic Process Automation (RPA) solutions are designed to liberate your team from mundane workflows, allowing them to focus on strategic initiatives that drive real business value. Whether it\'s automating email responses, consolidating data across countless spreadsheets, streamlining complex web interactions, or performing advanced data scraping from various sources, I harness the power of RPA to accelerate your operations across the board. Imagine a world where manual errors are minimized, compliance is effortlessly maintained, and processes run tirelessly 24/7, freeing up your human capital for more creative and critical tasks. If you\'re looking to significantly boost your operational speed, reduce costs associated with manual labor, and enhance accuracy across your business processes, this service is your gateway to a more agile, productive, and competitive future. I work closely with you to identify high-impact automation opportunities, design custom bots, and ensure seamless integration into your existing IT ecosystem, providing training and ongoing support to maximize your automation success.',
                'pt': ''
            }
        },
        {
            id: 'websites-and-web-applications',
            color: 'purple',
            title: {
                'en': 'Websites & Web Applications',
                'pt': 'Websites e Aplicações Web'
            },
            content: {
                'en': 'Bring your digital vision to life with bespoke websites and web applications tailored to your unique needs and strategic objectives. Whether you\'re aiming for a captivating e-commerce platform to showcase your products and drive online sales, a professional institutional website to establish a strong and credible online presence, or a Minimum Viable Product (MVP) for your groundbreaking Software as a Service (SaaS) startup, I\'m here to build it from the ground up. I specialize in crafting complete web solutions that are not only visually stunning and responsive across all devices but also highly functional, scalable, and secure. My development process emphasizes user experience, performance optimization, and future expandability, ensuring your investment stands the test of time. From initial concept and wireframing to robust backend development, intuitive frontend design, and seamless deployment, I ensure a smooth and collaborative journey. If you have a clear need for a comprehensive digital presence or a brilliant idea you\'re eager to transform into a tangible online reality that engages your audience and achieves your business goals, this service is your perfect partner.',
                'pt': ''
            }
        },
        {
            id: 'ci-cd-pipelines',
            color: 'red',
            title: {
                'en': 'CI / CD Pipelines',
                'pt': 'Pipelines de CI / CD'
            },
            content: {
                'en': 'Revolutionize your software delivery process with robust Continuous Integration (CI) and Continuous Deployment (CD) pipelines. Are manual deployments still a bottleneck, leading to slow releases and increased risk of errors? Or does the thought of complex YAML configurations for automating your build and deployment processes leave you feeling overwhelmed? Say goodbye to these frustrations! I design and implement fully automated CI/CD pipelines that seamlessly integrate your code changes, run comprehensive tests, and deploy your applications with unparalleled speed, reliability, and consistency. My expertise extends to various CI/CD platforms and a deep understanding of Infrastructure as Code (IaC) tools, ensuring that your entire development and production environment is managed programmatically. This approach reduces human error, enhances security, and provides a clear audit trail for every change. Focus solely on writing great code and innovating, and let your CI/CD server handle the intricate details of integration, building, testing, and deployment. Accelerate your development cycles, achieve true agility, and bring your products to market faster with confidence.',
                'pt': ''
            }
        },
        {
            id: 'cloud-dimensioning-and-provisioning',
            color: 'orange',
            title: {
                'en': 'Cloud Dimensioning & Provisioning',
                'pt': 'Dimensionamento e Provisionamento de Cloud'
            },
            content: {
                'en': 'Navigate the complexities of cloud infrastructure with expert Cloud Dimensioning and Provisioning services, ensuring your applications run optimally and cost-effectively. Whether you\'re launching your very first application into the cloud and need guidance on the best architecture, or you\'re optimizing an existing deployment to enhance performance and reduce expenses, I provide tailored solutions. If escalating infrastructure costs are impacting your bottom line, I will meticulously analyze your current setup, identify areas for optimization, and dimension your cloud environment to perfectly match your operational needs without over-provisioning. My expertise spans major cloud platforms including AWS, GCP, and Azure, allowing me to design and implement scalable, resilient, and secure infrastructures. My goal is to help you leverage the full power of cloud computing to deliver exceptional quality and performance to your customers, while ensuring you only pay for the resources you truly utilize. Let\'s build a cloud presence that supports your growth, minimizes operational overhead, and provides a robust foundation for your digital products and services.',
                'pt': ''
            }
        },
        {
            id: 'landing-page',
            color: 'green',
            title: {
                'en': 'Landing Page Design',
                'pt': 'Criação de Landing Page'
            },
            content: {
                'en': 'Capture your audience\'s attention instantly and drive conversions with a compelling and strategically designed Landing Page. If you need a quick, impactful online presence to showcase a new product, service, or special offer without the extensive development and complexity of a full web application, this service is tailor-made for your marketing objectives. I specialize in crafting responsive landing pages that are not only visually stunning and align seamlessly with your brand\'s unique visual identity but are also highly optimized for lead generation and specific calls-to-action. My design process focuses on clear messaging, persuasive copywriting (if provided), and intuitive user flows, ensuring that visitors are guided effortlessly towards your desired outcome, whether it\'s signing up for a newsletter, downloading an e-book, or making a purchase. Get a powerful, standalone web presence that\'s designed to attract, engage, and convert customers efficiently, helping you achieve your marketing and sales goals with speed, precision, and a high return on investment.',
                'pt': ''
            }
        },
    ]
}
