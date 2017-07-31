import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UsersComponent }      from './users.component';
import { AlbumsComponent }      from './albums.component';
import { PhotosComponent }      from './photos.component';

const routes: Routes = [
  { path: '', redirectTo: '/users', pathMatch: 'full' },
  { path: 'users',  component: UsersComponent },
  { path: 'albums/:id',  component: AlbumsComponent },
  { path: 'photos/:id',  component: PhotosComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}