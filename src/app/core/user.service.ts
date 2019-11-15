import { Injectable } from '@angular/core';
import { User } from '../shared/models/user-model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  getUser(): User {
    return {
      id: 1,
      firstName: "Luis",
      lastName: "Huidobro"
    };
  }
}
