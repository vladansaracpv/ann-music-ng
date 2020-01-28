import { NOTE, Note, NoteProps, NoteName, NoteMidi, NoteFreq, NoteInit, NoteMetricProperty } from 'ann-music-note';
import { Observable, of } from 'rxjs';

import { Injectable } from '@angular/core';

export type NoteInitType = 'name' | 'midi' | 'frequency';


@Injectable({
  providedIn: 'root'
})
export class NotesService {


  constructor() { }

  getNoteLetters(): Observable<string> {
    return of(NOTE.LETTERS);
  }

  getNoteNames(type: string): Observable<string[]> {
    return of(NOTE.notes(type));
  }

  getNoteByName(name: NoteName): Observable<NoteProps> {
    return of(Note({ name }));
  }

  getNoteByMidi(midi: NoteMidi): Observable<NoteProps> {
    return of(Note({ midi }));
  }

  getNoteByFreq(frequency: NoteFreq): Observable<NoteProps> {
    return of(Note({ frequency }));
  }

  getNoteDistance(from: NoteInit, to: NoteInit, metric: NoteMetricProperty): Observable<number> {
    return of(NOTE.Distance(metric)(from, to));
  }
}
