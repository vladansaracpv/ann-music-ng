// Feature (routed) module

import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';

import {
  NoteComponent, NoteDistanceComponent, NoteEditComponent,
  NoteListComponent, NoteAccidentalTypeComponent,
} from './components';
import { NotesRoutingModule } from './notes-routing.module';
import { NoteDetailComponent, NotesComponent } from './pages';
import { HertzPipe, ChangeColorDirective } from './shared';

const DECLARABLES = [
  NotesComponent,
  NoteDetailComponent,
  NoteListComponent,
  NoteEditComponent,
  NoteDistanceComponent,
  NoteEditComponent,
  NoteAccidentalTypeComponent,
  NoteComponent,
  HertzPipe,
  ChangeColorDirective
];

@NgModule({
  declarations: [
    ...DECLARABLES,
  ],
  imports: [
    SharedModule,
    NotesRoutingModule,
  ],
  exports: [
    ...DECLARABLES
  ]
})
export class NotesModule { }
