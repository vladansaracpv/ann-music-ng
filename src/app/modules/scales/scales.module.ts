import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ChordsModule } from '@modules/chords/chords.module';
import { SharedModule } from '@shared/shared.module';

import {
  ScaleChordsComponent, ScaleDescriptionComponent, ScaleEditComponent, ScaleNotesComponent
} from './components';
import { ScaleComponent, ScalesComponent } from './pages';
import { ScalesRoutingModule } from './scales-routing.module';

@NgModule({
  declarations: [ScaleComponent, ScalesComponent, ScaleEditComponent, ScaleNotesComponent, ScaleChordsComponent, ScaleDescriptionComponent],
  imports: [
    CommonModule,
    SharedModule,
    ScalesRoutingModule,
    ChordsModule,
  ]
})
export class ScalesModule { }
