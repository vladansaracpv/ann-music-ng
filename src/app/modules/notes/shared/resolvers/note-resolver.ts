import { NotesService } from '@core/services';
import { NoteProps } from 'ann-music-note';
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';


@Injectable({ providedIn: 'root' })
export class NoteResolver implements Resolve<NoteProps> {
  constructor(private router: Router, private noteService: NotesService) { }

  resolve(route: ActivatedRouteSnapshot): Observable<any> {
    return this.noteService.getNoteByName(route.params['id']).pipe(catchError((err) => this.router.navigateByUrl('/')));
  }

}
