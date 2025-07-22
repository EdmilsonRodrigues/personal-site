import { Component } from '@angular/core';
import { HeroComponent } from './hero/hero.component';
import { ContactComponent } from './contact/contact.component';
import { ProjectsComponent } from './projects/projects.component';
import { SkillsComponent } from './skills/skills.component';
import { ServicesComponent } from './services/services.component';

@Component({
    standalone: true,
    selector: 'app-home',
    imports: [
        ContactComponent,
        HeroComponent,
        ProjectsComponent,
        SkillsComponent,
        ServicesComponent
    ],
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss'
})
export class HomeComponent {

}
