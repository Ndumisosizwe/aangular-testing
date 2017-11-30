import {Component, OnInit} from '@angular/core';
import {UserService} from "./shared/user.service";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  providers: [UserService]
})
export class UserComponent implements OnInit {
  public user: { name: string } = {name};
  public isLoggedIn: boolean = true;

  constructor(private userService: UserService) {
  }

  ngOnInit() {
    this.user = this.userService.user;
  }


}
