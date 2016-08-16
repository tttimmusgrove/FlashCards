import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';

import {HeaderComponent} from './header.component';
import {FooterComponent} from './footer.component';
import {SearchResultsComponent} from './SearchResults.component';
import {LandingComponent} from './landing.component';
import {FlashcardComponent} from './flashcard.component';

@RouteConfig([
    { path: '/', name: 'Landing', component: LandingComponent},
    { path: '/search', name: 'Search', component: SearchResultsComponent},
    { path: '/flashcard', name: 'Flashcard', component: FlashcardComponent},
    { path: '/*other', name: 'Other', redirectTo: ['Landing']}

])

@Component({
    selector: 'my-app',
    template: `<my-header></my-header><router-outlet></router-outlet><my-footer></my-footer>`,
    directives: [HeaderComponent, FooterComponent, ROUTER_DIRECTIVES]
})

export class AppComponent {
}
