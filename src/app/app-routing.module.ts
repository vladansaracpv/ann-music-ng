// Routing module (contains routes for lazy modules)

import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '@core/guards';
import { NotFoundErrorComponent } from '@modules/layout';

const routes: Routes = [
  {
    path: 'notes',
    canActivate: [AuthGuard],
    loadChildren: () => import('@modules/notes/notes.module').then(m => m.NotesModule),
  },
  {
    path: 'chords',
    canActivate: [AuthGuard],
    loadChildren: () => import('@modules/chords/chords.module').then(m => m.ChordsModule),
  },
  {
    path: 'scales',
    canActivate: [AuthGuard],
    loadChildren: () => import('@modules/scales/scales.module').then(m => m.ScalesModule),
  },
  {
    path: '',
    redirectTo: 'notes',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: NotFoundErrorComponent
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
})
export class AppRoutingModule { }
