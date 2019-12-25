// Routed module (contains lazy-loaded route)

import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { NotFoundErrorComponent } from '@modules/layout';

const routes: Routes = [
  {
    path: 'notes',
    loadChildren: () => import('@modules/notes/notes.module').then(m => m.NotesModule),
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
