import { ScalesService } from '@modules/scales/shared';
import { ScaleProps } from 'ann-music-scale';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ScaleChord, ScaleChords } from '@modules/scales/shared';

@Component({
  selector: 'app-scale',
  templateUrl: './scale.component.html',
  styleUrls: ['./scale.component.scss']
})
export class ScaleComponent implements OnInit {
  scale: ScaleProps;
  notes: string[];
  tags: string[];
  scaleChords: ScaleChords[] = [];
  chords: string[][];

  constructor(private router: Router, private route: ActivatedRoute, private scaleService: ScalesService) { }

  ngOnInit() {
    this.route.data.subscribe((data) => {
      this.scale = data.scale;
      this.tags = [...data.chords, 'm', 'dim'];
      this.notes = this.scale.notes.map(note => note.replace(/[0-9]/, ''));
      console.log('Scale', this.scale);
    });
  }

  chordSelected({ checked, tag }: ScaleChord) {
    this.scaleChords = checked
      ? [...this.scaleChords, { name: tag, notes: this.notes }]
      : this.scaleChords.filter(sc => sc.name !== tag);
    console.log('ScaleChords: ', this.scaleChords);


    this.chords = this.scaleChords.reduce((acc, val) => [...acc, [val.name, ...this.checkChordMembership(val.name, val.notes)]], []);
    console.log('List: ', this.chords);
  }

  checkChordMembership(chord: string, notes: string[]): string[] {
    let result: string[];
    this.scaleService.checkChordMembership(chord, notes).subscribe(row => {
      result = row;
    });
    return result;
  }

}
