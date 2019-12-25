import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-note-names',
  templateUrl: './note-names.component.html',
  styleUrls: ['./note-names.component.scss']
})
export class NoteNamesComponent implements OnInit {
  @Input() names: string[];
  @Output() typeSelected = new EventEmitter<string>();

  type = '#';

  constructor() { }

  ngOnInit() {
  }

  selectType(type: string) {
    this.type = type;
    this.typeSelected.emit(type);
  }

  checkType(type: string): boolean {
    return this.type === type;
  }

}
