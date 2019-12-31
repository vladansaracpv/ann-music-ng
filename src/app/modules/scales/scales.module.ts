import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ScalesRoutingModule } from './scales-routing.module';
import { ScalesComponent, ScaleComponent } from './pages';
import { ScaleEditComponent, ScaleNotesComponent } from './components';
import { SharedModule } from '@shared/shared.module';


@NgModule({
  declarations: [ScaleComponent, ScalesComponent, ScaleEditComponent, ScaleNotesComponent],
  imports: [
    CommonModule,
    SharedModule,
    ScalesRoutingModule
  ]
})
export class ScalesModule { }
