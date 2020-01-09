import { ScaleChords } from '@modules/scales/shared';
import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-scale-chords',
  templateUrl: './scale-chords.component.html',
  styleUrls: ['./scale-chords.component.scss']
})
export class ScaleChordsComponent implements OnInit {
  @Input() notes: string[];
  @Input() chords: string[][];
  // dataSet = [
  //   ['Major', 'C', '', '', 'F', 'G', '', ''],
  //   ['Minor', '', 'Dm', 'Em', '', '', 'Am', ''],
  //   ['Diminished', '', '', '', '', '', '', 'Bdim'],
  // ];
  constructor() { }

  ngOnInit() {
  }

}
