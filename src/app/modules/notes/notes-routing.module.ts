// Routing module
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '@core/guards';

import { NoteComponent, NotesComponent } from './pages';
import { NoteResolver } from './shared';



const routes: Routes = [
  {
    path: '',
    component: NotesComponent,
    data: { title: 'Notes', returnUrl: '/' },
    canActivate: [AuthGuard],
  },
  {
    path: ':id',
    component: NoteComponent,
    data: { title: 'Notes', returnUrl: '/notes' },
    resolve: { note: NoteResolver },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NotesRoutingModule { }
