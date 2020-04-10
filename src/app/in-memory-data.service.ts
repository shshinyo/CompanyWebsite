import { Injectable } from '@angular/core';
import { InMemoryDbService, RequestInfo, ResponseOptions } from 'angular-in-memory-web-api';


@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
  
 constructor() { }
  createDb() {
    const users = [
      { id: 11, firstname: 'ibrahem', lastname: 'mohamed', email: 'hema@gmail.com', password: 'welcome' },
      { id: 12, firstname: 'rehabhema', lastname: 'mohamed', email: 'hema@gmail.com', password: 'welcome'}
    ];
    return {users};
}
}