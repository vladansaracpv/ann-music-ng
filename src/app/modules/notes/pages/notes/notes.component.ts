import { NOTE } from 'ann-music-note';
import { NotesService } from '../../shared';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss']
})
export class NotesComponent implements OnInit {
  letters: string[];
  notes: string[];
  type = '#';

  constructor(private noteService: NotesService) { }

  ngOnInit() {
    this.getNames();
  }

  setNameType(type: string) {
    this.type = type;
    this.getNames();
  }

  getNames() {
    this.noteService.getNoteNames(this.type).subscribe((names) => {
      this.notes = names;
    });
  }

}
