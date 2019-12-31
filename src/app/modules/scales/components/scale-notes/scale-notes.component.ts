import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-scale-notes',
  templateUrl: './scale-notes.component.html',
  styleUrls: ['./scale-notes.component.scss']
})
export class ScaleNotesComponent implements OnInit {
  @Input() notes: string[];
  chromaticScale = ['C', 'Db', 'D', 'Eb', 'E', 'F', 'Gb', 'G', 'Ab', 'A', 'Bb', 'B'];

  constructor() { }

  ngOnInit() {
  }

  checkType(note: string): boolean {
    return this.notes.includes(note) ? true : false;
  }


}
