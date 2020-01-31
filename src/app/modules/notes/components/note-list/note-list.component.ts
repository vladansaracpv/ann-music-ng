import { NOTE } from 'ann-music-note';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-note-list',
  templateUrl: './note-list.component.html',
  styleUrls: ['./note-list.component.scss']
})
export class NoteListComponent implements OnInit {
  notes: string[];
  allNotes = ['C', 'C#', 'Db', 'D', 'D#', 'Eb', 'E', 'F', 'F#', 'Gb', 'G', 'G#', 'Ab', 'A', 'A#', 'Bb', 'B'];
  showAltered = false;

  ngOnInit() {
    this.notes = this.names(' ');
  }

  names(type: string) {
    return this.allNotes.filter(n => type.includes(n[1] || ' '));
  }

  selectType(type: string) {
    this.notes = this.names(type);
  }

  trackByItems(index: number): number { return index; }

}
