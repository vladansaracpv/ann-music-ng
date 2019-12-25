import { AuthGuard } from '@core/guards';
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { NotFoundErrorComponent, LayoutComponent } from '@modules/layout';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/dashboard/notes',
    pathMatch: 'full'
  },
  {
    path: 'dashboard',
    component: LayoutComponent,
    canActivate: [AuthGuard],
    children: [
      { path: '', redirectTo: 'notes', pathMatch: 'full' },
      {
        path: 'notes',
        loadChildren: () => import('@modules/notes/notes.module').then(m => m.NotesModule),
        data: { title: 'Notes', returnUrl: '/dashboard/notes' }
      },
      { path: '**', component: NotFoundErrorComponent }
    ]
  },
  { path: '**', component: NotFoundErrorComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      enableTracing: false,
      preloadingStrategy: PreloadAllModules
    })
  ],
  exports: [RouterModule],
})
export class AppRoutingModule { }
