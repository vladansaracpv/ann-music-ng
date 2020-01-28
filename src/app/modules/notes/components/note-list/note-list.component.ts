import { NOTE } from 'ann-music-note';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-note-list',
  templateUrl: './note-list.component.html',
  styleUrls: ['./note-list.component.scss']
})
export class NoteListComponent implements OnInit {
  notes: string[];

  ngOnInit() {
    this.notes = NOTE.notes(' ');
  }

  selectType(type: string) {
    this.notes = NOTE.notes(type);
  }

}
