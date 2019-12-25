import { NotesService } from '@core/services/notes.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss']
})
export class NotesComponent implements OnInit {
  letters: string;
  names: string[];
  type = '#';

  constructor(private noteService: NotesService) { }

  ngOnInit() {
    this.getLetters();
    this.getNames();
  }

  setNameType(type: string) {
    this.type = type;
    this.getNames();
  }

  getLetters() {
    this.noteService.getNoteLetters().subscribe((letters) => {
      this.letters = letters;
    });
  }

  getNames() {
    this.noteService.getNoteNames(this.type).subscribe((names) => {
      this.names = names;
    });
  }

}
