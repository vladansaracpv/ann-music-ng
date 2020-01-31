import { NoteComponent } from '@modules/notes';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ChordsModule } from '@modules/chords/chords.module';
import { NotesModule } from '@modules/notes/notes.module';
import { SharedModule } from '@shared/shared.module';

import {
  ScaleChordsComponent, ScaleDescriptionComponent, ScaleEditComponent, ScaleNotesComponent
} from './components';
import { NewScaleComponent, ScaleComponent, ScalesComponent } from './pages';
import { ScalesRoutingModule } from './scales-routing.module';
import { AdDirective } from './shared/ad.directive';

const DECLARABLES = [
  ScaleComponent, ScalesComponent, NewScaleComponent,
  ScaleChordsComponent, ScaleDescriptionComponent, ScaleEditComponent, ScaleNotesComponent,
  AdDirective
];

@NgModule({
  declarations: [
    ...DECLARABLES,
  ],
  imports: [
    CommonModule,
    SharedModule,
    ScalesRoutingModule,
    ChordsModule,
    NotesModule,
  ],
  entryComponents: [NoteComponent]
})
export class ScalesModule { }
