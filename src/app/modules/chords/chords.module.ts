import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { ChordsRoutingModule } from './chords-routing.module';
import { ChordsComponent, ChordComponent } from './pages';


@NgModule({
  declarations: [ChordsComponent, ChordComponent],
  imports: [
    SharedModule,
    ChordsRoutingModule
  ]
})
export class ChordsModule { }
