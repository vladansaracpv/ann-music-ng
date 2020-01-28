import { Component, Input, OnInit } from '@angular/core';
import { ScaleProps } from 'ann-music-scale';

@Component({
  selector: 'app-scale-description',
  templateUrl: './scale-description.component.html',
  styleUrls: ['./scale-description.component.scss']
})
export class ScaleDescriptionComponent implements OnInit {
  @Input() scale: ScaleProps;
  notes: string[];

  constructor() { }

  ngOnInit() {
    this.notes = this.scale.notes.map(note => note.replace(/[0-9]/, ''));
  }

}
