import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.scss']
})
export class NoteComponent implements OnInit {
  @Input() note: string;

  classList = {};

  constructor() { }

  ngOnInit() {
    this.classList = {
      black: this.note.length > 1,
      white: this.note.length === 1,
    };
  }

}
