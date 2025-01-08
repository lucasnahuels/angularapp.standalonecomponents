import { Component, OnInit } from '@angular/core';
import { PersonService } from '../services/person.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-person-list',
  templateUrl: './person-list.component.html',
  styleUrls: ['./person-list.component.css'],
  imports: [CommonModule],
  providers: [PersonService]
})
export class PersonListComponent implements OnInit {
  persons: { id: number; name: string; age: number; }[] = [];

  constructor(private personService: PersonService) {}

  ngOnInit(): void {
    this.persons = this.personService.getPersons();
  }
}