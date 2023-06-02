import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { RemoteEntryComponent } from './entry.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import { remoteRoutes } from './entry.routes';
import { FormsModule } from '@angular/forms';

import { MatButtonModule } from '@angular/material/button'
@NgModule({
  declarations: [RemoteEntryComponent, NxWelcomeComponent],
  imports: [
    CommonModule,
     FormsModule,

     MatButtonModule,

      RouterModule.forChild(remoteRoutes)],
  providers: [],
})
export class RemoteEntryModule {}
