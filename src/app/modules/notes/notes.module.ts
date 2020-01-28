// Feature (routed) module

import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';

import {
  NoteDistanceComponent, NoteEditComponent,
  NoteListComponent, NoteAccidentalTypeComponent
} from './components';
import { NotesRoutingModule } from './notes-routing.module';
import { NoteComponent, NotesComponent } from './pages';
import { HertzPipe } from './shared';

const DECLARABLES = [
  NotesComponent,
  NoteComponent,
  NoteListComponent,
  NoteEditComponent,
  NoteDistanceComponent,
  HertzPipe
];

@NgModule({
  declarations: [
    ...DECLARABLES,
    NoteEditComponent,
    NoteAccidentalTypeComponent,
  ],
  imports: [
    SharedModule,
    NotesRoutingModule,
  ],
})
export class NotesModule { }
