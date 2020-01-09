import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-note-list',
  templateUrl: './note-list.component.html',
  styleUrls: ['./note-list.component.scss']
})
export class NoteListComponent implements OnInit {
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
