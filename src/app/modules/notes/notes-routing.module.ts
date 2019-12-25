import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NotesComponent, NoteComponent } from './pages';


const routes: Routes = [
  { path: '', component: NotesComponent },
  {
    path: ':id',
    component: NoteComponent,
    data: { title: 'Notes', returnUrl: '/dashboard/notes' }
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NotesRoutingModule { }
