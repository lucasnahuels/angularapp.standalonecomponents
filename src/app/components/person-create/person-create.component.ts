import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PersonService } from '../../services/person.service';
import { Router } from '@angular/router';
import { Person } from '../../models/person.model';

@Component({
  selector: 'app-person-create',
  standalone: true,
  templateUrl: './person-create.component.html',
  styleUrls: ['./person-create.component.css'],
  imports: [CommonModule, FormsModule],
  providers: []
})
export class PersonCreateComponent {
  person : Person = { id: 0, name: '', age: 0 };
  constructor(private personService: PersonService, private router: Router) {}

  createPerson(): void {
    // this.personService.addPerson(this.person);
    // this.router.navigate(['/']);
    this.personService.addPerson(this.person).subscribe(response => {
      console.log('Person created:', response);
      this.personService.getPersons().subscribe(persons => console.log('Persons in Create component:', persons));
      this.router.navigate(['/']);
    });
  }
}