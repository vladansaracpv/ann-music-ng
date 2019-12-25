import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '@core/guards';

import { ChordComponent, ChordsComponent } from './pages';
import { ChordResolver } from './shared';

const routes: Routes = [
  {
    path: '',
    component: ChordsComponent,
    data: { title: 'Chords', returnUrl: '/' },
    canActivate: [AuthGuard],
  },
  {
    path: ':id',
    component: ChordComponent,
    data: { title: 'Chords', returnUrl: '/chords' },
    resolve: { chord: ChordResolver },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChordsRoutingModule { }
