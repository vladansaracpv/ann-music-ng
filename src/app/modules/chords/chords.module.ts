import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { ChordsRoutingModule } from './chords-routing.module';
import { ChordsComponent, ChordComponent } from './pages';
import { ChordTypesComponent } from './components';


@NgModule({
  declarations: [ChordsComponent, ChordComponent, ChordTypesComponent],
  imports: [
    SharedModule,
    ChordsRoutingModule
  ],
  exports: [
    ChordTypesComponent
  ]
})
export class ChordsModule { }
