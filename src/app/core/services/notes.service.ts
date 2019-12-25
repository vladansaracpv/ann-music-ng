import { NOTE, Note } from 'ann-music-note';
import { Observable, of } from 'rxjs';

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NotesService {

  constructor() { }

  getNoteLetters(): Observable<string> {
    return of(NOTE.LETTERS);
  }

  getNoteNames(type: string): Observable<string[]> {
    return type === '#' ? of(NOTE.SHARPS) : of(NOTE.FLATS);
  }
}
