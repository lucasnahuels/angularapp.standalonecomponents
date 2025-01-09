import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable, of } from "rxjs";
import { Person } from "../models/person.model";

/*By adding the @Injectable decorator with providedIn: 'root', you ensure that the PersonService 
is available as a singleton service throughout your application.
By using the @Injectable decorator, Angular can inject these dependencies into the PersonService 
when it is instantiated.*/
/*
When you use providedIn: 'root', Angular creates a single instance of the service that is shared 
across the entire application. This means that any component or service that injects PersonService 
will receive the same instance.
*/ 
@Injectable({
    providedIn: 'root'
})
export class PersonService {
    private persons : Person[] = [
        { id: 1, name: 'John Doe', age: 30 },
        { id: 2, name: 'Jane Smith', age: 25 },
        { id: 3, name: 'Alice Johnson', age: 28 },
        { id: 4, name: 'Bob Brown', age: 35 },
        { id: 5, name: 'Charlie Davis', age: 22 }
    ];

    private personsSubject: BehaviorSubject<Person[]> = new BehaviorSubject(this.persons);
    persons$: Observable<Person[]> = this.personsSubject.asObservable();
  
    // getPersons() {
    //     return this.persons;
    // }
    getPersons(): Observable<Person[]> {
        return of(this.persons);
    }

    addPerson(person: Person): Observable<Person> {
        person.id = this.persons.length + 1;
        this.persons.push(person);
        this.personsSubject.next(this.persons); // Notify subscribers of the change
        return of(person);
    }
}