import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { NotesRoutingModule } from './notes-routing.module';

import { NoteLettersComponent, NoteNamesComponent } from './components';
import { NoteComponent, NotesComponent } from './pages';
import { HertzPipe } from './shared';

const DECLARABLES = [NotesComponent, NoteComponent, NoteLettersComponent, NoteNamesComponent, HertzPipe];

@NgModule({
  declarations: [
    ...DECLARABLES,
  ],
  imports: [
    CommonModule,
    SharedModule,
    NotesRoutingModule,
  ]
})
export class NotesModule { }
