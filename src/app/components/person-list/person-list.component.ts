import { Component, OnInit } from '@angular/core';
import { PersonService } from '../../services/person.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Person } from '../../models/person.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-person-list',
  templateUrl: './person-list.component.html',
  styleUrls: ['./person-list.component.css'],
  imports: [CommonModule, RouterModule],
  providers: [] /* If I provide the PersonService service here and I do the same in the PersonCreateComponent,
  the PersonService is created in two different instances for each component. I need the same instance for 
  both components so the person array is updated when I navigate back to the list*/
  /*
  The PersonService works fine in the PersonListComponent even though it is not declared in the providers array 
  of the @Component decorator because it is provided at the root level. This is achieved by using the 
  providedIn: 'root' option in the @Injectable decorator of the PersonService
  */ 
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