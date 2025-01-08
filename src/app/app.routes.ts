import { Routes } from '@angular/router';
import { WeatherComponent } from './weather/weather.component';
import { PersonCreateComponent } from './components/person-create/person-create.component';
import { PersonListComponent } from './components/person-list/person-list.component';

export const routes: Routes = [
    { path: 'weather', component: WeatherComponent },
    { path: '', component: PersonListComponent },
    { path: 'create', component: PersonCreateComponent }
];
