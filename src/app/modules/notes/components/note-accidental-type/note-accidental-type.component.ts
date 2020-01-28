import { Component, OnInit, Output, EventEmitter } from '@angular/core';

enum NoteType {
  NATURAL = ' ',
  SHARP = '# ',
  FLAT = 'b ',
  ALL = '#b '
}

@Component({
  selector: 'app-note-accidental-type',
  templateUrl: './note-accidental-type.component.html',
  styleUrls: ['./note-accidental-type.component.scss']
})
export class NoteAccidentalTypeComponent implements OnInit {
  type = ' ';
  types = NoteType;
  @Output() typeSelected = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  selectType(type: string) {
    this.type = type;
    this.typeSelected.emit(type);
  }

  checkType(type: string): string {
    return this.type === type ? 'primary' : 'default';
  }

}
