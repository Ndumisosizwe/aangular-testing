import {Injectable} from "@angular/core";

@Injectable()
export class UserService {
  user: { name: string } = {name: null};

  constructor() {
    this.user.name = 'Max';
  }
}
