import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { RemoteEntryComponent } from './entry.component';
import { remoteRoutes } from './entry.routes';
import { FormsModule } from '@angular/forms';

import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatTableModule } from '@angular/material/table';

import { UserListComponent } from '../user-list/user-list.component';
@NgModule({
  declarations: [RemoteEntryComponent, UserListComponent],
  imports: [
    CommonModule,
    FormsModule,

    MatButtonModule,
    MatCheckboxModule,
    MatTableModule,

    RouterModule.forChild(remoteRoutes),
  ],
  providers: [],
})
export class RemoteEntryModule {}
