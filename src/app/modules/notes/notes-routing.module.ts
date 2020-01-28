// Routed module
import { NoteEditComponent } from './components';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NoteComponent, NotesComponent } from './pages';
import { NoteResolver } from './shared';

const routes: Routes = [
  {
    path: '',
    component: NotesComponent,
    data: { title: 'Notes', returnUrl: '/' },
    children: [
      {
        path: ':id',
        component: NoteComponent,
        data: { title: 'Notes', returnUrl: '/notes' },
        resolve: { note: NoteResolver },
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NotesRoutingModule { }
