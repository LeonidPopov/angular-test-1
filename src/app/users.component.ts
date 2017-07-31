import { Component }    from '@angular/core';
import { User }         from './user';
import { UserService }  from './user.service';
import { Router }       from '@angular/router';

@Component({
  selector: 'my-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {
  
  title = 'test';
  users: User[];

  constructor(
    private userService: UserService,
    private router: Router) { }

  getUsers(): void {
	   this.userService
       .getUsers()
       .then(users => this.users = users);
  }

  onSelect(user: User): void {
    let link = ['/albums', user.id];
    this.router.navigate(link);
  }

  ngOnInit(): void {
  	this.getUsers();
  }
}
