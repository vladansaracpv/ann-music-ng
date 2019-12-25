import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-note-letters',
  templateUrl: './note-letters.component.html',
  styleUrls: ['./note-letters.component.scss']
})
export class NoteLettersComponent implements OnInit {
  @Input() letters: string[];

  constructor() { }

  ngOnInit() {
  }

}
