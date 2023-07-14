import { Component } from '@angular/core';

export interface UserModel {
  name: string;
  title: string;
  email: string;
  active: boolean;
  lastLogin: Date;
}

const USER_DATA: UserModel[] = [
  {name: 'Craig Mellon', title: 'CTO', email: 'craig.mellon@telxl.com', active: true, lastLogin: new Date()},
  {name: 'Matt Grove', title: 'Senior Developer', email: 'matt@telxl.com', active: true, lastLogin: new Date()},
  {name: 'John Doe', title: 'CEO', email: 'john.doe@telxl.com', active: true, lastLogin: new Date()},
  {name: 'Billy Sharp', title: 'Professional Footballer', email: 'billy@sufc.co.uk', active: false, lastLogin: new Date()},
  {name: 'Andy Nicolson', title: 'Product Manager', email: 'andy@telxl.com', active: true, lastLogin: new Date()},
];


@Component({
  selector: 'clip-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
})
export class UserListComponent {
  displayedColumns: string[] = ['name', 'title', 'email', 'active', 'lastLogin'];
  dataSource = USER_DATA;
}
