import { Injectable, ɵEMPTY_MAP } from '@angular/core';
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
      lastName: "Huidobro",
      email: "luis_huidobro@email.com",
      password: "Password1234"
    };
  }
}
