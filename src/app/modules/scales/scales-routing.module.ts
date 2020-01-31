import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '@core/guards';

import { ScaleComponent, ScalesComponent, NewScaleComponent } from './pages';
import { ScaleChordsResolver, ScaleResolver } from './shared';

const routes: Routes = [
  {
    path: 'new',
    component: NewScaleComponent
  },
  {
    path: '',
    redirectTo: 'new',
    pathMatch: 'full'
  },
  {
    path: '',
    component: ScalesComponent,
    data: { title: 'Scales', returnUrl: '/' },
    canActivate: [AuthGuard],
    children: [
      {
        path: ':id',
        component: ScaleComponent,
        data: { title: 'Scales', returnUrl: '/scales' },
        resolve: { scale: ScaleResolver, chords: ScaleChordsResolver },
      },
    ]
  },


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ScalesRoutingModule { }
