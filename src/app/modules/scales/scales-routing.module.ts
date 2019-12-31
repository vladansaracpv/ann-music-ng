import { ScaleResolver } from './shared/scale-resolver';
import { ScaleEditComponent } from './components';
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
        path: 'edit',
        component: ScaleEditComponent
      },
      {
        path: ':id',
        component: ScaleComponent,
        data: { title: 'Scales', returnUrl: '/scales' },
        resolve: { scale: ScaleResolver },
      },
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ScalesRoutingModule { }
