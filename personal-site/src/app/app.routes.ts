import { Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { AboutComponent } from './views/about/about.component';
import { PortfolioComponent } from './views/portfolio/portfolio.component';
import { portfolioRoutes } from './views/portfolio/portfolio.routes';
import { PageNotFoundComponent } from './views/page-not-found/page-not-found.component';
import { ServicesComponent } from './views/services/services.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        title: 'Edmilson Rodrigues - Home Page',
    },
    {
        path: 'about',
        component: AboutComponent,
        title: 'Edmilson Rodrigues - About me',
    },
    {
        path: 'portfolio',
        component: PortfolioComponent,
        children: portfolioRoutes,
    },
    {
        path: 'services',
        component: ServicesComponent,
        title: 'Edmilson Rodrigues - Services'
    },
    { path: '**', component: PageNotFoundComponent }
];
