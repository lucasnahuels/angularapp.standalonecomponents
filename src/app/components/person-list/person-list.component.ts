import { Component, OnInit } from '@angular/core';
import { PersonService } from '../../services/person.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Person } from '../../models/person.model';
import { Router } from '@angular/router';
import { PersonCreateComponent } from '../person-create/person-create.component';

@Component({
  selector: 'app-person-list',
  templateUrl: './person-list.component.html',
  styleUrls: ['./person-list.component.css'],
  imports: [CommonModule, RouterModule],
  providers: []
})
export class PersonListComponent implements OnInit {
  persons: Person[] = [];
  constructor(private personService: PersonService, private router: Router) {}

  ngOnInit(): void {
    this.personService.getPersons().subscribe(persons => {
      this.persons = persons;
      console.log('Persons in List component:', this.persons);
    })
  }

  createPerson(): void {
    this.router.navigate(['/create']);
  }
}