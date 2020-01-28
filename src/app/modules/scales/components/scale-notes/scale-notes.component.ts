import { NOTE } from 'ann-music-note';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-scale-notes',
  templateUrl: './scale-notes.component.html',
  styleUrls: ['./scale-notes.component.scss']
})
export class ScaleNotesComponent implements OnInit {
  @Input() notes?: string[];
  @Input() accidental: string;

  chromaticScale: string[];

  ngOnInit() {
    this.chromaticScale = this.accidental === '#' ? NOTE.SHARPS : NOTE.FLATS;
    this.notes = this.notes ? this.notes : this.chromaticScale;
  }

  checkType(note: string): string {
    return this.notes.includes(note) ? 'primary' : '';
  }


}
