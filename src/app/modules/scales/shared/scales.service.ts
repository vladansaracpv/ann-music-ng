import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Scale, SCALE, ScaleProps } from 'ann-music-scale';
import { PC } from 'ann-music-pc';
import { Chord, CHORD } from 'ann-music-chord';

@Injectable({
  providedIn: 'root'
})
export class ScalesService {

  constructor() { }

  getScaleByName(name: string): Observable<ScaleProps> {
    const scale = Scale(name.split('-').join(' '));
    return of(scale);
  }

  getScaleChords(name: string): Observable<string[]> {
    const chords = SCALE.chords(name.split('-').join(' '));
    return of(chords);
  }

  getAllChordTypes(): Observable<string[]> {
    return of(CHORD.chordTypesList.sort());
  }

  checkChordMembership(chord: string, notes: string[]): Observable<string[]> {
    const result = notes
      .map(note => Chord(`${note} ${chord}`).notes)
      .map(ch => PC.Methods.isSubsetOf({ notes })({ notes: ch }) ? ch[0] + chord : '');
    console.log('Result:', result);
    return of(result);
  }
}
