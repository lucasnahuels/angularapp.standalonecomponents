import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { PersonListComponent } from './person-list/person-list.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [RouterOutlet, RouterModule, CommonModule, PersonListComponent],
})
export class AppComponent {
  title = 'angularapp1.client';
}
