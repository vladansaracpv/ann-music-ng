// Feature (routed) module

import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';

import { NoteDistanceComponent, NoteLettersComponent, NoteListComponent, NoteEditComponent, NoteContainerComponent } from './components';
import { NotesRoutingModule } from './notes-routing.module';
import { NoteComponent, NotesComponent } from './pages';
import { HertzPipe } from './shared';

const DECLARABLES = [
  NotesComponent,
  NoteComponent,
  NoteLettersComponent,
  NoteListComponent,
  NoteEditComponent,
  NoteDistanceComponent,
  HertzPipe
];

@NgModule({
  declarations: [
    ...DECLARABLES,
    NoteEditComponent,
    NoteContainerComponent,
  ],
  imports: [
    SharedModule,
    NotesRoutingModule,
  ],
})
export class NotesModule { }
