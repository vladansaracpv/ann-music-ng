import { ScaleResolver, ScaleChordsResolver } from './shared';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ScaleComponent, ScalesComponent } from './pages';
import { AuthGuard } from '@core/guards';

const routes: Routes = [
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
