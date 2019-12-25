// Feature (routed) module

import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';

import { NoteDistanceComponent, NoteLettersComponent, NoteNamesComponent } from './components';
import { NotesRoutingModule } from './notes-routing.module';
import { NoteComponent, NotesComponent } from './pages';
import { HertzPipe } from './shared';

const DECLARABLES = [
  NotesComponent,
  NoteComponent,
  NoteLettersComponent,
  NoteNamesComponent,
  NoteDistanceComponent,
  HertzPipe
];

@NgModule({
  declarations: [
    ...DECLARABLES,
  ],
  imports: [
    SharedModule,
    NotesRoutingModule,
  ],
})
export class NotesModule { }
