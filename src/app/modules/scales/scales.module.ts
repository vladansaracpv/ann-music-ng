import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ScalesRoutingModule } from './scales-routing.module';
import { ScalesComponent, ScaleComponent } from './pages';
import { ScaleEditComponent, ScaleNotesComponent } from './components';
import { SharedModule } from '@shared/shared.module';
import { ScaleChordsComponent } from './components/scale-chords/scale-chords.component';


@NgModule({
  declarations: [ScaleComponent, ScalesComponent, ScaleEditComponent, ScaleNotesComponent, ScaleChordsComponent],
  imports: [
    CommonModule,
    SharedModule,
    ScalesRoutingModule
  ]
})
export class ScalesModule { }
