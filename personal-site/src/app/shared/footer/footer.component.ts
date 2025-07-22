import { Component } from '@angular/core';

interface Social {
    link: string
    name: string
    social: boolean
}

@Component({
    standalone: true,
    selector: 'app-footer',
    imports: [],
    templateUrl: './footer.component.html',
    styleUrl: './footer.component.scss'
})
export class FooterComponent {
    socials: Social[] = [
        {
            link: "tel:+351938976988",
            name: "Phone",
            social: false
        },
        {
            link: "https://github.com/EdmilsonRodrigues",
            name: "GitHub",
            social: true
        },
        {
            link: "mailto:contato@edmilsonrodrigues.com",
            name: "Email",
            social: false
        },
        {
            link: "https://linkedin.com/in/edmilson-monteiro-rodrigues",
            name: "Linkedin",
            social: true
        },
        {
            link: "https://github.com/EdmilsonRodrigues/personal-site",
            name: "Source",
            social: true
        },


    ]
}
